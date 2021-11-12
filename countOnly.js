const assertEqual = function(actual, expected) {

    if(actual === expected) {
        console.log("✅ Assertion Passed : ", actual + " === " + expected);
    }
    else {
        console.log("🛑 Assertion Failed : ", actual + " !== " + expected);
    }
}


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {

    var report = {};

    for (var itc in itemsToCount) {

        // additional filter for object properties:
        if (itemsToCount.hasOwnProperty(itc)) {

            //only count what's asked for
            if(itemsToCount[itc] && allItems.includes(itc)) {

                let count = 0;

                allItems.forEach(x => {
                    if(x === itc)
                        count++;                                          
                });
            
                report[itc] = count;
            }
        }
    }
 
    console.log(report);

    return report;

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);