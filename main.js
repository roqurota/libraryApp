const { app, Menu, ipcMain } = require('electron')
const path = require('path')
const MainWindow = require('./MainWindow')
const Store = require('./Store')

// Set env
process.env.NODE_ENV = 'development'

const isDev = process.env.NODE_ENV !== 'production' ? true : false

let mainWindow

// Init store & defaults
const store = new Store({
    configname: 'app-settings',
    models: [
        {
            name: 'Skull',
            path: path.join(app.getPath('userData'), 'app', 'asstes', 'models', 'gltf', 'skull', 'scene.gltf')
        }
    ]
})

app.on('ready', () => {
    mainWindow = new MainWindow('./app/index.html', isDev)

    mainWindow.webContents.on('dom-ready', () => {
        // mainWindow.webContents.send('settings:get', store.get('models'))
    })
})

app.allowRendererProcessReuse = true