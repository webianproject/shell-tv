const express = require('express');
const router = require('./services/router');
const PORT = 8080;

/**
 * Services expose kiosk features over HTTP, both locally and via the  
 * Web of Things.
 */
var Services = {
  start: function() {
    this.server = express();
    this.server.use(router);
    this.server.listen(PORT, () => 
      console.log(`Starting services on port ${PORT}...`));
  }
}

module.exports = Services;