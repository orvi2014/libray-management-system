const electron = require('electron')
const path = require('path')
const url = require('url')
const { app, BrowserWindow, ipcMain: ipc, Menu } = electron

let win


// Template for the Menu
menuTemplate = [
  {
    label: 'Application',
    submenu: [
      {
        label: 'About',
        click: () => {
          openAboutWindow()
        }
      }
    ]
  }
]

// Keep a global reference so the garbage collector does not destroy our app
let mainWindow
let dashWindow

function createWindow () {

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720
  })

  // Load the index.html file
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'login.html'),
    protocol: 'file:',
    slashes: true
  }))

  

  // Set up the menu
  var menu = Menu.buildFromTemplate(menuTemplate)
  mainWindow.setMenu(menu)

  mainWindow.on('closed', () => {
    mainWindow =null
  })
}

// Opens the about window
function openAboutWindow() {

  let aboutWindow = new BrowserWindow({
    parent: mainWindow,
    modal: true,
    show: false,
    width: 400,
    height: 200
  })
  aboutWindow.loadURL(url.format({
    pathname: path.join(__dirname, ''),
    protocol: 'file:',
    slashes: true
  }))
  aboutWindow.setMenu(null)
  aboutWindow.once('ready-to-show', () => {
    aboutWindow.show()
  })
}

// Create the window then the app is ready
app.on('ready', () => {
  createWindow()
  electron.powerMonitor.on('on-ac', () => {
    mainWindow.restore()
    dashWindow.restore()
  })
  electron.powerMonitor.on('on-battery', () => {
    mainWindow.minimize()
    dashWindow.minimize()
  })
})

// new window open
exports.openWindow = (filename) => {
  console.log('paici')
  let win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nativeWindowOpen: true
    }
  })
  win.loadURL(`file://${__dirname}`+filename+`.html`)
}


// rendering message
ipc.on("send-window-id", (event) => {
  event.sender.send("window-id-sent", win.id)
  win.close()
})

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Reopen the app on macOS
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
