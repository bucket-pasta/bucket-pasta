'use strict'
const express = require('express');
const clipboard = require('./resources/sample-clipboard.js');

// Create the express app
const app = express();

// Routes and middleware
// app.use(/* ... */)
app.get('/clipboard', function (req,res) {
  res.send(clipboard);
  res.status(200).send();
});

// Error handlers
app.use(function fourOhFourHandler (req, res) {
  res.status(404).send();
})
app.use(function fiveHundredHandler (err, req, res, next) {
  console.error(err);
  res.status(500).send();
})

// Start server
app.listen(1234, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Started at http://localhost:1234');
})
