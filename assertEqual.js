// Function that takes in 2 values and returns true if they are equal and false otherwise.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};

module.exports = assertEqual;