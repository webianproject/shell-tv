const {ipcRenderer} = require('electron');

/**
 * Shell is the system chrome loaded inside the top level window.
 */
var Shell = {
  /**
   * Start Shell.
   */
  start: function() {
    console.log('Starting shell...');
    this.webview = document.getElementById('webview');
    
    ipcRenderer.on('loadURL', (event, url) => {
        this.webview.src = url;
    });
  }
}

/**
  * Start Shell on page load.
  */
window.addEventListener('load', function shell_onLoad() {
  window.removeEventListener('load', shell_onLoad);
  Shell.start();
});