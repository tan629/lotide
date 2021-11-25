//Function that takes in a collection of items and returns a specific subset of those items.
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {

  let report = {};

  for (let itc in itemsToCount) {

    //only count what's asked for
    if (itemsToCount[itc] && allItems.includes(itc)) {

      let count = 0;

      allItems.forEach(x => {
        if (x === itc)
          count++;
      });
            
      report[itc] = count;
    }
  }

  return report;

};

module.exports = countOnly;