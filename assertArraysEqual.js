const assertArraysEqual = function(arr1, arr2) {

    if(eqArrays(arr1,arr2)) {
        console.log("✅ Assertion Passed : ", arr1 + " === " + arr2);
    }
    else {
        console.log("🛑 Assertion Failed : ", arr1 + " !== " + arr2);
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

