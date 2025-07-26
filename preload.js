const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld(`ElCalc`, {
    Minimize: () => ipcRenderer.send('Minimize')
})