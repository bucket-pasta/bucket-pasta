'use strict';

const mongoose = require('mongoose');

let tabsRef = require('../tabs/tabs-schema.js');

const userData = mongoose.Schema({
    userName: String,
    tabs: [tabsRef],
})


module.exports = mongoose.model('UserData', userData);
