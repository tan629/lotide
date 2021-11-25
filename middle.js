//A function that takes in an array and returns middle most element of the array.

const middle = function(arr) {

  let res = [];

  if (arr.length < 3) return res;

  let mid;

  if (arr.length % 2 === 0) {

    mid = arr.length / 2;

    res.push(arr[mid - 1]);
  } else {

    mid = Math.floor(arr.length / 2);
  }

  res.push(arr[mid]);

  return res;

};

module.exports = middle;
