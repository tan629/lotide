const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {

  if (eqArrays(arr1,arr2)) {
    console.log("✅ Assertion Passed - arrays are identical : [", arr1 + "] === [" + arr2 + "]");
  } else {
    console.log("🛑 Assertion Failed - arrays are not identical : [", arr1 + "] !== [" + arr2 + "]");
  }
};

module.exports = assertArraysEqual;