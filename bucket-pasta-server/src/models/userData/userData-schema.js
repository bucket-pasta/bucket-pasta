'use strict';

const mongoose = require('mongoose');

const pastiesSchema = mongoose.Schema({
    displayName: String,
    theme: String,
    type: String,
    content: String
})

const tabsSchema = mongoose.Schema({
    displayName: String,
    theme: String,
    type: String,
    pasties: [pastiesSchema]
})

const userData = mongoose.Schema({
    userName: String,
    tabs: [tabsSchema],

})



module.exports = mongoose.model('userData', userData);
