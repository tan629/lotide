//Function that takes in 2 objects and return true if they are equal and false otherwise.

const eqArrays   = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  let count1 = Object.keys(object1).length;
  let count2 = Object.keys(object2).length;

  if (count1 !== count2) return false;

  for (const key of Object.keys(object1)) {
    if (!(key in object2))
      return false;

    //Check if the values to be compared are actually array types
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

      if (!eqArrays(object2[key],object1[key]))
        return false;
        
    } else if (object2[key] !== object1[key]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;