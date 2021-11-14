const assertArraysEqual = function(arr1, arr2) {

    if(eqArrays(arr1,arr2)) {
        console.log("✅ Assertion Passed - arrays are identical : [", arr1 + "] === [" + arr2 + "]");
    }
    else {
        console.log("🛑 Assertion Failed - arrays are not identical : [", arr1 + "] !== [" + arr2 + "]");
    }
}

function eqArrays(arr1, arr2) {

    if(arr1.length === 0 && arr2.length === 0) return true;

    if(arr1.length !== arr2.length) {
        return false;
    }

    for(i = 0; i < arr1.length; i++) {

        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;

}

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  }

const results1 = map(words, word => word[0]);

const results2 = words.map(word => word[0]);

const results3 = words.map(function(x) {
    return x[0];
});

console.log(assertArraysEqual(results1, ["g","c","t","m","t"]));

console.log(assertArraysEqual(results2, ["g","c","t","m","t"]));

console.log(assertArraysEqual(results3, ["g","c","t","m","t"]));