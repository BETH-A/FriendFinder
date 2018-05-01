// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow files in public folder to be served static
app.use(express.static(__dirname + '/app/public'));

// Routers
app.use(require('./app/routing/apiRoutes'));
app.use(require('./app/routing/htmlRoutes'));


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});