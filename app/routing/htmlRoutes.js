// Dependencies
// =============================================================
var express = require('express');
var router = express.Router();
var path = require('path');

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
router.get('/', function(req, res) {
	res.sendFile('home.html', { root: path.join(__dirname, '../public')});
});

// Displays survey
router.get('/survey', function(req, res){
	res.sendFile('survey.html', { root: path.join(__dirname, '../public')});
});

// Catch all route
router.get('/:home', function(req, res) {
	res.sendFile('home.html', { root: path.join(__dirname, '../public')});
});
module.exports = router;