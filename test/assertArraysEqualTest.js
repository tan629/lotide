const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns Assertion Passed - arrays are identical : [" + ["1", "2", "3"] + "] and [" + ["1", "2", "3"] + "]", () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]),true);
  });
  
  it("returns Assertion Failed - arrays are not identical : [" + ["1", "2", "3", "5"] + "] and [" + ["1", "2", "3","4"] + "]", () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3","5"], ["1", "2", "3","4"]),false);
  });
  
  it("returns Assertion Failed - arrays are not identical : [" + ["1", "2"] + "] and [" + ["1", "2", "3","4"] + "]", () => {
    assert.strictEqual(assertArraysEqual(["1", "2"], ["1", "2", "3","4"]),false);
  });
  
});