const { app, BrowserWindow } = require('electron');
const path = require('path');

async function createWindow() {
  const isDev = (await import('electron-is-dev')).default;

  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    },
  });

  // Hide the default menu bar
  win.setMenuBarVisibility(null);

  win.loadURL(
    isDev
      ? 'http://localhost:9000'
      : `file://${path.join(__dirname, 'build/index.html')}`
  );
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
