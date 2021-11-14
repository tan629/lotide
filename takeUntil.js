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

const takeUntil = function(array, callback) {

    const res = [];

    for(let i of array) {

        if(callback(i)){
            break;
        }

        res.push(i);
    }

    return res;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1,[1,2,5,7,2]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]));