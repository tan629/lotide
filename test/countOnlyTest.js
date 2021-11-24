const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {

  let counts = countOnly(firstNames,{ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
      
  it("should return 1 count for Jason", () => {

    assert.strictEqual(counts["Jason"], 1);
  });
  
  it("should return undefined for Karima", () => {

    assert.strictEqual(counts["Karima"], undefined);
  });

  it("should return 2 counts for Fang", () => {

    assert.strictEqual(counts["Fang"], 2);
  });
});