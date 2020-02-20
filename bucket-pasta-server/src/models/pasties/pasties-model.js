'use strict';

const Model = require('../mongo.js');
const schema = require('./pasties-schema.js');

/**
 * Class representing a Category.
 * @extends Model
 */
class Pasties extends Model {
  constructor() { super(schema); }
}

module.exports = Pasties;
