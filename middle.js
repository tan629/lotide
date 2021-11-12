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

const middle = function(arr) {

    var res = [];

    if(arr.length < 3) return res;

    var mid;

    if(arr.length % 2 == 0) {

        mid = arr.length / 2;

        res.push(arr[mid - 1]);      
    }

    else {

        mid = Math.floor(arr.length / 2);
    }

    res.push(arr[mid]); 

    return res;

}

console.log(assertArraysEqual(middle( [1,2]), [] ));

console.log(assertArraysEqual(middle( [1,2,3]), [2] ));

console.log(assertArraysEqual(middle( [1,2,3,4]), [2,3] ));
