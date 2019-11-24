/**
 * Router routes HTTP requests to appropriate controllers.
 */
var express = require('express');
var router = express.Router();
var actionsController = require('./controllers/actions-controller');

// Use JSON middleware
router.use(express.json());
// Serve action requests
router.use('/actions', actionsController);
// Serve static files
router.use(express.static('./services/static'));

module.exports = router;
