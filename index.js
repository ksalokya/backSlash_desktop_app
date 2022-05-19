const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

function createWindow() {
    let win = new BrowserWindow()
    win.maximize();
    win.removeMenu();
    win.loadURL("https://backslash.netlify.app");
}

app.on('ready', createWindow)