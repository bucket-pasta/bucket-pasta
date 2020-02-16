'use strict';

const mongoose = require('mongoose');

let pasties = require('../pasties/pasties-schema.js');

const tab = mongoose.Schema({
    displayName: String,
    theme: String,
    type: String,
    pasties: [pasties] //not sure if this is doing what I think. It should hopefully read this as an array of objects that look like the pasties schema.
})


module.exports = mongoose.model('Tab', tab);