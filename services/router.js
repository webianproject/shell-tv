/**
 * Router routes HTTP requests to appropriate controllers.
 */
const express = require('express');
const path = require('path');
const router = express.Router();
const actionsController = require('./controllers/actions-controller');

// Use JSON middleware
router.use(express.json());
// Serve action requests
router.use('/actions', actionsController);
// Serve static files
router.use(express.static(path.join(__dirname, 'static')));

module.exports = router;