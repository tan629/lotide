const assert = require('chai').assert;
const eqArrays   = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns [1,2,3] equal to [1,2,3]", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
  });

  it("returns [] equal to []", () => {
    assert.deepEqual(eqArrays([], []),true);
  });

  it("returns [1,2,3,5] not equal to [1,2,3,4]", () => {
    assert.deepEqual(eqArrays([1, 2, 3,5], [1, 2, 3,4]),false);
  });

  it("returns [1,2] not equal to [1,2,3,4]", () => {
    assert.deepEqual(eqArrays([1, 2], [1, 2, 3,4]),false);
  });
});