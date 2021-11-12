const assertArraysEqual = function(arr1, arr2) {

    if(eqArrays(arr1,arr2)) {
        console.log("✅ Assertion Passed - arrays are identical : [" + arr1 + "] === [" + arr2 + "]");
    }
    else {
        console.log("🛑 Assertion Failed - arrays are not identical : [" + arr1 + "] !== [" + arr2 + "]");
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

let without = (sourceArr, itemsToRemove) => {

    var resultArr = [];

    for(i = 0; i < sourceArr.length; i++) {

        if(!itemsToRemove.includes(sourceArr[i]))
            resultArr.push(sourceArr[i]);

    }

    return resultArr;

}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(assertArraysEqual(without([1, 2, 3], [1]),[2,3]));
 // => [2, 3]
console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1","2"])); 

