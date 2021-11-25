//Function that takes in 2 objects and returns true if they are equal and false otherwise.

const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  return eqObjects(actual,expected);
};

module.exports = assertObjectsEqual;