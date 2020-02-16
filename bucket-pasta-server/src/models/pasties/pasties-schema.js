'use strict';

const mongoose = require('mongoose');

const pasties = mongoose.Schema({
    displayName: String,
    theme: String,
    type: String,
    content: String
})


module.exports = mongoose.model('Pasties', pasties);
