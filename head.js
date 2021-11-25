//Function that takes in an array and returns the first element in the array.

let head = function(arr) {
  if (arr.length === 0) {
    return null;
  }
  return arr[0];
};

module.exports = head;