const { app, Menu, ipcMain } = require('electron')
const MainWindow = require('./MainWindow')

// Set env
process.env.NODE_ENV = 'development'

const isDev = process.env.NODE_ENV !== 'production' ? true : false

let mainWindow

app.on('ready', () => {
    mainWindow = new MainWindow('index.html', isDev)
})