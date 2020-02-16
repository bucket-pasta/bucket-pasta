'use strict';

const Model = require('../mongo.js.js');
const schema = require('./tabs-schema.js');

/**
 * Class representing a Category.
 * @extends Model
 */
class Tabs extends Model {
  constructor() { super(schema); }
}

module.exports = Tabs;
