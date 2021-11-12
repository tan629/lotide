const assertEqual = function(actual, expected) {

    if(actual === expected) {
        console.log("✅ Assertion Passed : ", actual + " === " + expected);
    }
    else {
        console.log("🛑 Assertion Failed : ", actual + " !== " + expected);
    }
}


const findKeyByValue = function(obj, val) {

    for (var item in obj) {

        // additional filter for object properties:
        if (obj.hasOwnProperty(item)) {

            if(obj[item] === val) {
               return item;
            }
        }

    }

    return null;
}

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");