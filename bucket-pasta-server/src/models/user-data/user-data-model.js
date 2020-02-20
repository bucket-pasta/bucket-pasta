'use strict';

const Model = require('../mongo.js');
const schema = require('./user-data-schema.js');

/**
 * Class representing a Category.
 * @extends Model
 */
class UserData extends Model {
  constructor() { super(schema); }
}

module.exports = UserData;
