const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
    },
  });


  win.loadFile("index.html"); // Tera To-Do HTML yahin load hoga
}


app.whenReady().then(createWindow);
