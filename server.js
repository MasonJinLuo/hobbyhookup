// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var path = require("path");
var passport = require('passport')
var cookieParser = require('cookie-parser');
var session = require('express-session');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Requiring our models for syncing
var hobbyhookupdb = require("./models");

var setupPassport = require('./passport.js');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));

// Routes =============================================================

//	¯\_(ツ)_/¯

require("./routes/hobby-routes.js")(app);
require("./routes/messages-route.js")(app);


//Setting up login session
//IMPORTANT TODO:  CHANGE THIS SESSION SECRET FOR A PRODUCTION SERVER
app.use(cookieParser())
app.use(session({ secret: 'friedbanana', resave: false, saveUninitialized: false }))

// Initialize Passport and restore authentication state, if any, from the
// session.
setupPassport(app);



// Syncing our sequelize models and then starting our express app
hobbyhookupdb.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});