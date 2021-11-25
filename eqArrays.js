//Function that takes in 2 arrays and returns true if the arrays are equal and false otherwise.

let eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i])
      return false;
  }

  return true;

};

module.exports = eqArrays;

