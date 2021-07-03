const { app } = require("electron");
const ControlWindow = require("./controlWindow.js");
function App() {
  const win = require("./createWindow.js");
  const tray = require("./Tray.js");

  const { toggle } = ControlWindow(win, tray);

  tray.on("click", toggle);
  win.on("blur", win.hide);
}

app.whenReady().then(App);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
