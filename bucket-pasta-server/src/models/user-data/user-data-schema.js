'use strict';

const mongoose = require('mongoose');

// const pastiesSchema = mongoose.Schema({
//     displayName: String,
//     theme: String,
//     type: String,
//     content: String
// })

// const tabsSchema = mongoose.Schema({
//     displayName: String,
//     theme: String,
//     type: String,
//     pasties: [pastiesSchema]
// })

const Data = mongoose.Schema({
    tabs: [Object]
})

const userData = mongoose.Schema({
    userName: String,
    data: Data,

})



module.exports = mongoose.model('UserData', userData);
