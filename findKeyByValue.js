//Function that takes in an object and a value and returns the first key that corresponds to that value.

const findKeyByValue = function(obj, val) {

  for (let item in obj) {
    if (obj[item] === val) {
      return item;
    }
  }

  return undefined;
};

module.exports = findKeyByValue;