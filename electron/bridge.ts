import { contextBridge, ipcRenderer } from "electron";
import { timerStates } from "../src/@types/timer";

export const api = {
	minimizeWindow: () => {
		ipcRenderer.send("minimize");
	},

	maximizeWindow: async () => {
		const isMaximized = await ipcRenderer.invoke("isMaximized");
		if (isMaximized) {
			ipcRenderer.send("unmaximize");
		} else {
			ipcRenderer.send("maximize");
		}
	},

	closeWindow: () => {
		ipcRenderer.send("close");
	},

	sendNotify: ({ title, body }: { title: string; body: string }) => {
		ipcRenderer.send("notify", title, body);
	},

	sendMessage: (message: string) => {
		ipcRenderer.send("message", message);
	},

	openSpotify: () => {
		ipcRenderer.send("openSpotify");
	},

	readJson: async (name: string): Promise<{}> => {
		const data = await ipcRenderer.invoke("readFile", name);

		return data as {};
	},

	writeJson: (name: string, content: {}) => {
		ipcRenderer.send("writeFile", name, content);
	},

	on: (channel: string, callback: Function) => {
		ipcRenderer.on(channel, (_, data) => callback(data));
	},

	startTimer: (timer: number) => {
		ipcRenderer.send("start-timer", { timer });
	},

	pauseTimer: () => {
		ipcRenderer.send("pause-timer");
	},

	resetTimer: (initialTime: number) => {
		ipcRenderer.send("reset-timer", initialTime);
	},

	removeAllListeners: (listener: string) => {
		ipcRenderer.removeAllListeners(listener);
	},

	updateStateTimer: (states: { timer: number; action: boolean }) => {
		ipcRenderer.send("update-state-timer", states);
	},

	updateTimer: (callback: (state: timerStates) => void) => {
		ipcRenderer.on("update-time", (event, value) => {
			callback(value);
		});
	},

	timerComplete: (callback: () => void) => {
		ipcRenderer.on("timer-complete", () => {
			callback();
		});
	},

	pictureInPictureState: async () => {
		const data = await ipcRenderer.invoke("picture-state");

		return data
	},

	updateSobreposition: (callback: (state: boolean) => void) => {
		ipcRenderer.on("update-sobreposition", (event, value) => {
			callback(value);
		});
	},

	openSobreposition: () => {
		ipcRenderer.send("openSobreposition");
	},

	closeSobreposition: () => {
		ipcRenderer.send("closeSobrepor");
	},
};

contextBridge.exposeInMainWorld("Main", api);
