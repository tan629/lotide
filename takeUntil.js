//A function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.

const takeUntil = function(array, callback) {

  const res = [];

  for (let i of array) {

    if (callback(i)) {
      break;
    }

    res.push(i);
  }

  return res;
};

module.exports = takeUntil;