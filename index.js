const head   = require('./head');
const middle = require('./middle');
const map = require('./map');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const countOnly = require('./countOnly');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');


module.exports = {
  head:   head,
  middle: middle,
  map: map,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  countOnly: countOnly,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual
};