const electron = require('electron');
const url = require('url');
const path = require('path');
const BrowserWindow = electron.BrowserWindow;

/**
 * Top level chrome module which creates the main Electron BrowserWindow and 
 * loads the system chrome inside it.
 */
var Chrome = {
  
  /**
   * Create main window and load shell as system chrome.
   */
  start: function() {
    // Create the main window
    this.mainWindow = new BrowserWindow({
      fullscreen: true,
      webPreferences: {
        nodeIntegration: true,
        webviewTag: true
      }
    });
    // Load shell.html as chrome
    this.mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'chrome/shell.html'),
      protocol: 'file:',
      slashes: true
    }));
    
    // Uncomment the following line to open DevTools
    //this.mainWindow.webContents.openDevTools();
  },
  
  /**
   * Send a message to the system chrome over IPC.
   *
   * @param String channel The channel over which to send the message.
   * @param String message The message to send.
   */
  sendMessage: function(channel, message){
    this.mainWindow.webContents.send(channel, message);
  }
}

module.exports = Chrome;