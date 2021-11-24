const assert = require('chai').assert;
const without   = require('../without');

const words = ["hello", "world", "lighthouse"];

describe("#without", () => {
  it("returns ['hello','world'] for [" + words + "]", () => {
    assert.deepEqual(without(words,"lighthouse"), ["hello","world"]);
  });

  it("returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(without([1,2,3],[1]), [2,3]);
  });

  it("returns ['1','2'] for ['1','2','3']", () => {
    assert.deepEqual(without(["1","2","3"],["3"]), ["1","2"]);
  });

});