const { BrowserWindow } = require('electron') 

class MainWindow extends BrowserWindow {
    constructor(file, isDev) {
        super({
            title: 'library App',
            width: isDev ? 900 : 355,
            height: 600,
            icon: './assets/icons/icon.png',
            resizable: isDev ? true : false,
            show: true,
            opacity: 1,
            webPreferences: {
              nodeIntegration: true,
              contextIsolation: false // required is not defined problem fix
            },
          })

          this.loadFile(file)

          if (isDev) {
            this.webContents.openDevTools()
          }
    }
}

module.exports = MainWindow