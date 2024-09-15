import { app, BrowserWindow } from "electron";

import path from "path";
import { handleListeners } from "./ipc/listeners";
import createWindowSpotify from "./screens/spotify";
import { getTimerWindow } from "./screens/timer";

let mainWindow: BrowserWindow | null;

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

const assetsPath =
	process.env.NODE_ENV === "production"
		? process.resourcesPath
		: app.getAppPath();

function createWindow() {
	mainWindow = new BrowserWindow({
		icon: path.join(assetsPath, "assets", "icons", "icon.ico"),
		title: "Oberon",
		width: 1100,
		height: 700,
		minWidth: 750,
		minHeight: 450,
		frame: false,
		autoHideMenuBar: true,
		backgroundColor: "#0000",
		transparent: false,
		webPreferences: {
			devTools: true,
			nodeIntegration: true,
			contextIsolation: true,
			preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
		},
	});

	mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

	mainWindow.maximize();

	mainWindow.on("closed", () => {
		const timerWindow = getTimerWindow()
		if (timerWindow) {
			timerWindow.webContents.send("close-window")
			timerWindow.close();
		}

		mainWindow?.webContents.send("close-window")
		mainWindow = null;
	});
}

async function registerListeners() {
	handleListeners(mainWindow, assetsPath);
}

app
	.on("ready", createWindow)
	.whenReady()
	.then(() => {
		registerListeners()
		createWindowSpotify()
		setInterval(createWindowSpotify, 55 * 60 * 1000)
	})
	.catch((e) => alert(e));

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
