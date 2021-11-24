const assert = require('chai').assert;
const findKeyByValue   = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
      
  it("returns genre 'drama' for show name 'The Wire'", () => {
    const expected = "drama";
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre,"The Wire"), expected);
  });
  
  it("returns genre undefined for show name 'That 70's Show'", () => {
    const expected = undefined;
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre,"That 70's Show"), expected);
  });
  
  it("returns genre 'sciFi' for show name 'The Expanse'", () => {
    const expected = "sciFi";
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre,"The Expanse"), expected);
  });
});