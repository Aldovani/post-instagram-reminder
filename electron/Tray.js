const { Tray } = require("electron");
const { resolve } = require("path");

const iconPath = resolve(__dirname, "../", "assets", "instagram.png");

function CreateTray() {
  const tray = new Tray(iconPath);

  tray.setToolTip("Instagram reminder");
  return tray;
}

module.exports = CreateTray();
