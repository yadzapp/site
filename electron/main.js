const { app, BrowserWindow } = require('electron')
const path = require('path')
const serve = require('electron-serve')

const serveURL = serve({ directory: 'dist' })

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // If server is still running in the background, use this:
  // kill -9 $(lsof -ti:3000)

  if (process.env.NODE_ENV === 'dev') {
    win.loadURL('http://localhost:3000')
    win.webContents.openDevTools()
  } else {
    // win.loadURL('app://-')
    serveURL(win)
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})