/* eslint-disable no-undef */
import { ipcMain, Notification, BrowserWindow, shell } from "electron";

import path from "path";
import fs from "fs";
import { timerProps, timerStates } from "../../src/@types/timer";
import createTimerWindow, { getTimerWindow } from "../screens/timer";

let timerWindow: BrowserWindow | null;
let timerInterval: NodeJS.Timeout;

let isTimerRunning = false;
let currentTime: number;

export const handleListeners = (
	mainWindow: BrowserWindow | null,
	assetsPath: string,
) => {
	ipcMain.on("maximize", () => {
		mainWindow?.maximize();
	});

	ipcMain.on("unmaximize", () => {
		mainWindow?.unmaximize();
	});

	ipcMain.on("minimize", () => {
		mainWindow?.minimize();
	});

	ipcMain.on("close", () => {
		mainWindow?.close();
	});

	ipcMain.handle("isMaximized", () => mainWindow?.isMaximized());

	ipcMain.on("notify", (_, title, body) => {
		const icon = path.join(assetsPath, "assets", "icons", "icon.ico");

		new Notification({ title, body, icon }).show();
	});

	ipcMain.on("message", (_, message) => {
		console.log(message);
	});

	ipcMain.handle("readFile", (_, name: string): timerProps[] => {
		const filePath = path.join(assetsPath, "assets", "configs", name);

		const fileContent = fs.readFileSync(filePath, "utf8");

		const data = JSON.parse(fileContent);

		return data;
	});

	ipcMain.on("writeFile", async (_, name: string, content: []) => {
		const filePath = path.join(assetsPath, "assets", "configs", name);

		try {
			const dataFile = JSON.stringify(content, null, 2);

			fs.writeFileSync(filePath, dataFile);

			console.log(`Arquivo ${name} atualizado com sucesso.`);
		} catch (error) {
			console.error(`Erro ao escrever no arquivo ${name}:`, error);
		}
	});

	ipcMain.on("closeSobrepor", () => {
		if (timerWindow) {
			timerWindow.close();
			timerWindow = null;

			mainWindow?.webContents.send("update-sobreposition", false);
		}
	});

	ipcMain.on("openSobreposition", () => {
		timerWindow = createTimerWindow();
	});

	ipcMain.on("openSpotify", () => {
		shell.openExternal("spotify://");
	});

	ipcMain.on("update-state-timer", (event, { timer, action }) => {
		let states: timerStates;
		timerWindow = getTimerWindow();

		if (action) {
			states = {
				currentTime: timer,
				isTimerRunning,
			};
		} else {
			states = {
				currentTime,
				isTimerRunning,
			};
		}

		currentTime = states.currentTime;

		if (mainWindow) {
			mainWindow.webContents.send("update-time", states);
		}
		if (timerWindow) {
			timerWindow.webContents.send("update-time", states);
		}
	});

	ipcMain.on("start-timer", (event, { timer }) => {
		if (!isTimerRunning) {
			isTimerRunning = true;
			currentTime = timer;

			// Enviar atualizações de tempo para a janela do React
			timerInterval = setInterval(() => {
				if (currentTime <= 0) {
					// Timer concluído, notifique a janela do React
					mainWindow?.webContents.send("timer-complete");
					clearInterval(timerInterval);
					isTimerRunning = false;
				} else {
					// Envie o tempo atual para a janela do React
					timerWindow = getTimerWindow();
					const states: timerStates = {
						currentTime,
						isTimerRunning,
					};
					if (mainWindow) {
						mainWindow.webContents.send("update-time", states);
					}
					if (timerWindow) {
						timerWindow.webContents.send("update-time", states);
					}
					currentTime -= 0.1; // Subtrair um segundo
				}
			}, 100);
		}
	});

	ipcMain.on("pause-timer", () => {
		if (isTimerRunning) {
			clearInterval(timerInterval);
			isTimerRunning = false;

			const states: timerStates = {
				currentTime,
				isTimerRunning: false,
			};

			if (mainWindow) {
				mainWindow.webContents.send("update-time", states);
			}

			if (timerWindow) {
				timerWindow.webContents.send("update-time", states);
			}
		}
	});

	ipcMain.on("reset-timer", (_event, initialTime: number) => {
		timerWindow = getTimerWindow();
		currentTime = initialTime;
		clearInterval(timerInterval);

		const states: timerStates = {
			currentTime,
			isTimerRunning,
		};

		if (mainWindow) {
			mainWindow.webContents.send("update-time", states);
		}

		if (timerWindow) {
			timerWindow.webContents.send("update-time", states);
		}
	});

	ipcMain.on("close-window", (_event) => {
		if (isTimerRunning) {
			clearInterval(timerInterval);
			isTimerRunning = false;
		}
	})

	ipcMain.handle("picture-state", (event) => {
		timerWindow = getTimerWindow();
		const state = timerWindow ? true : false

		return state;
	})
};
