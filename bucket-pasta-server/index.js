'use strict'
const express = require('express');
const clipboard = require('./resources/sampleUserObject.js');
const cors = require('cors');

// Create the express app
const app = express();
const bodyParser = require('body-parser')
let inMemoryUserObject

// Routes and middleware
// app.use(/* ... */)
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/clipboard', function (req,res) {
  res.status(200).send(inMemoryUserObject || clipboard);
});

app.post('/user/update/', function (req, res) {
  inMemoryUserObject = req.body;
  res.status(200).send('nothing to see here');
})
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
