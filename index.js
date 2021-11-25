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
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  middle,
  map,
  findKeyByValue,
  findKey,
  eqArrays,
  eqObjects,
  countOnly,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  takeUntil,
  without
};