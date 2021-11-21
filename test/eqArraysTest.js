const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


console.log(assertEqual(eqArrays([], []), true)); //Pass

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); //Pass
// => true
console.log(assertEqual(eqArrays(["1", "2", "3","5"], ["1", "2", "3","4"]),true)); //Fail

console.log(assertEqual(eqArrays(["1", "2"], ["1", "2", "3","4"]),true)); //Fail