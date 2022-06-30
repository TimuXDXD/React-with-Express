const express = require("express");
const path = require("path");
const logger = require("morgan");
const favicon = require("serve-favicon");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// API Routes here


// catchall
app.get('/backend', (req, res) => {
  res.send({express: 'Connected.'});
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
