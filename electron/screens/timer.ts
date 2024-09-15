import { BrowserWindow, app } from "electron";

import path from 'path'

let timerWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

const assetsPath =
  process.env.NODE_ENV === 'production'
    ? process.resourcesPath
    : app.getAppPath()

export function createTimerWindow() {
  if (!timerWindow) {
    const width = 400;
    const height = 100;

    const maxWidth = 500;
    const maxHeight = 180;

    timerWindow = new BrowserWindow({
      icon: path.join(assetsPath, 'assets', 'icons', 'icon.ico'),
      width: width,
      height: height,
      maxWidth: maxWidth,
      maxHeight: maxHeight,
      x: 10,
      y: 10,
      minWidth: 300,
      minHeight: height,
      maximizable: false,
      frame: false,
      transparent: false,
      alwaysOnTop: true,
      webPreferences: {
        preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
        devTools: true,
        sandbox: true,
        nodeIntegration: true,
        nodeIntegrationInWorker: true,
      }
    })

    timerWindow.loadURL(`${MAIN_WINDOW_WEBPACK_ENTRY}?rota=previw`);

    timerWindow.on('closed', () => {
      timerWindow = null
    })
  } else {
    timerWindow?.close()
    timerWindow = null
  }

  return timerWindow
}

export const getTimerWindow = () => {
  return timerWindow
}

export default createTimerWindow