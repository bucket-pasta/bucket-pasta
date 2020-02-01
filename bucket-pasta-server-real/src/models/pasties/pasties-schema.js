'use strict';

const mongoose = require('mongoose');

const pasties = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
}, { toObject: { virtuals: true }, toJSON: { virtuals: true } });

pasties.virtual('tasks', {
    ref: 'todo',
    localField: 'name',
    foreignField: 'category',
    justOne: false,
});

pasties.pre('find', function () {
    try {
        this.populate('tasks');
    }
    catch (e) {
        console.error('Find Error', e);
    }
});

module.exports = mongoose.model('Pasties', pasties);
