const {app, BrowserWindow, ipcMain } = require('electron')
const { join } = require('path')
function LaunchCalculator(){
    var CalcApp = new BrowserWindow({
        frame: false,
        width: 360,
        height: 600,
        transparent: true,
        icon: join(__dirname, "AppMedia", "logo.png"),
        webPreferences: {
            devTools: false,
            preload: join(__dirname, "preload.js")
        }
    })
    CalcApp.loadFile(join(__dirname, "Calc.html"))
    ipcMain.on('Minimize', (e) => {
        CalcApp.minimize();
    })
}

app.on('ready', ()=>{
    LaunchCalculator()
})

app.on('quit', ()=>{
    if(process.platform!='darwin'){
        app.quit()
    }
})