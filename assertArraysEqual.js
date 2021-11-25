//Function that takes in 2 arrays and returns true if they are equal and false otherwise.

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  return eqArrays(arr1,arr2);
};

module.exports = assertArraysEqual;