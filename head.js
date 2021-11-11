const assertEqual = function(actual, expected) {

    if(actual === expected) {
        console.log("✅ Assertion Passed : ", actual + " === " + expected);
    }
    else {
        console.log("🛑 Assertion Failed : ", actual + " !== " + expected);
    }
}


function head(arr) {

    if(arr.Length == 0)
        return null;

    return arr[0];

}

assertEqual(head([5,3,4]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hellos");