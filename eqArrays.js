const assertEqual = function(actual, expected) {

    if(actual === expected) {
        console.log("✅ Assertion Passed : ", actual + " === " + expected);
    }
    else {
        console.log("🛑 Assertion Failed : ", actual + " !== " + expected);
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

console.log(assertEqual(eqArrays([], []), true)); //Pass

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); //Pass
// => true
console.log(assertEqual(eqArrays(["1", "2", "3","5"], ["1", "2", "3","4"]),true)); //Fail

console.log(assertEqual(eqArrays(["1", "2"], ["1", "2", "3","4"]),true)); //Fail