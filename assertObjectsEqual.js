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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

    let count1 = Object.keys(object1).length;
    let count2 = Object.keys(object2).length;

    if(count1 !== count2) return false;

    for (const key of Object.keys(object1)) 
    {    
        if(!(key in object2))
            return false;

        //Check if the values to be compared are actually array types
        if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {

            if(!eqArrays(object2[key],object1[key]))
                return false;
        }   

        else if(object2[key] !== object1[key]) {
            return false;
        }
    }

    return true;
};

const assertObjectsEqual = function(actual, expected) {

    const inspect = require('util').inspect;
    
    if(eqObjects(actual,expected)) {
        console.log("✅ Assertion Passed - objects are identical : [", inspect(actual) + "] === [" + inspect(expected) + "]");
    }
    else {
        console.log("🛑 Assertion Failed - objects are not identical : [", inspect(actual) + "] !== [" + inspect(expected) + "]");
    }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false