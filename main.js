/**
 * Webian Shell Kiosk.
 *
 * Main script starts up Webian Shell chrome and services.
 */
const electron = require('electron');
const app = electron.app;
const services = require('./services');
const chrome = require('./chrome');

function startShell() {
  services.start();
  chrome.start();
}

app.on('ready', startShell);