'use strict';


/**
 * API Router Module (V1)
 * Integrates with various models through a common Interface (.get(), .post(), .put(), .delete())
 * @module src/api/v1
 */

const cwd = process.cwd();

const express = require('express');

const auth = require('../auth/middleware.js');
const modelFinder = require(`${cwd}/src/middleware/model-finder.js`);

const router = express.Router();


// Evaluate the model, dynamically
router.param('model', modelFinder.load);

// Models List
router.get('/api/v1/models', (request, response) => {
  modelFinder.list()
    .then(models => response.status(200).json(models));
});

// JSON Schema
router.get('/api/v1/:model/schema', (request, response) => {
  response.status(200).json(request.model.jsonSchema());
});


// API Routes
/**
 * Get a list of records for a given model
 * Model must be a proper model, located within the ../models folder
 * @route GET /api/v1/{model}
 * @param {model} model.path - Model Name
 * @security basicAuth
 * @returns {object} 200 { count: 2, results: [ {}, {} ] }
 * @returns {Error}  500 - Server error
 */
router.get('/api/v1/:model', auth('read'), handleGetAll);

/**
 * @route POST /api/v1/:model
 * Model must be a proper model, located within the ../models folder
 * @param {model} model.path.required
 * @returns {object} 200 - Count of results with an array of results
 * @returns {Error}  500 - Unexpected error
 */
router.post('/api/v1/:model', auth('create'), handlePost);

router.get('/api/v1/:model/:id', auth('read'), handleGetOne);
router.put('/api/v1/:model/:id', auth('update'), handlePut);
router.delete('/api/v1/:model/:id', auth('delete'), handleDelete);

//this is so that we don't break the client when we flip to the real-server

const clipboard = require('../../../resources/potentialNewUserObjectFormat.js');
let inMemoryUserObject

// router.get('/clipboard', handleUserPageLoad);

router.get('/clipboard', function (req,res) {
  console.log(JSON.stringify(inMemoryUserObject || clipboard))
  res.status(200).send(inMemoryUserObject || clipboard);
});

router.post('/user/update/', function (req, res) {
  inMemoryUserObject = req.body;
  console.log(JSON.stringify(inMemoryUserObject))
  res.status(200).send('nothing to see here');
})

// Route Handlers

function handleUserPageLoad(request, response,next){
  request.model.get(request.params.userName)
  .then(results => {console.log(results);
    response(200).send(results)
  })
}

function handleGetAll(request,response,next) {
  request.model.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

function handleGetOne(request,response,next) {
  request.model.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

function handlePost(request,response,next) {
  request.model.create(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

function handlePut(request,response,next) {
  request.model.update(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

function handleDelete(request,response,next) {
  request.model.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

module.exports = router;
