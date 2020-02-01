'use strict';

const Model = require('../mongo.js.js');
const schema = require('./pasties-schema.js.js');

/**
 * Class representing a Category.
 * @extends Model
 */
class Pasties extends Model {
  constructor() { super(schema); }
}

module.exports = Pasties;
