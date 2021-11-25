//A function that takes in a source array and an itemsToRemove arrays and
//returns only the items from the source array that are not in the itemsToRemove array.

let without = (sourceArr, itemsToRemove) => {

  let resultArr = [];

  for (let i = 0; i < sourceArr.length; i++) {

    if (!itemsToRemove.includes(sourceArr[i]))
      resultArr.push(sourceArr[i]);

  }

  return resultArr;

};

module.exports = without;

