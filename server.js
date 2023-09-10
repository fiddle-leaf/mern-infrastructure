/**
 * Import Dependencies
 *
 */
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

// Always require and configure near the top
require("dotenv").config();

// Connect to MongoDB
require("./config/database");

/**
 * create express app
 */
const app = express();

/**
 * mount the morgan logging middleware
 * express.json()middleware processes JSON data sent in the AJAX request and adds it to the req.body
 * express.urlencode dmiddleware processes data submitted by a form but do not submit forms in a SPA.
 */
app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

/**
 * ROUTES
 */
// Put API routes here, before the "catch all"
app.use("/api/users", require("./routes/api/users"));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
