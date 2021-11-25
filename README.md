# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tan629/lotide`

**Require it:**

`const _ = require('@tan629/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

## Documentation

The following functions are currently implemented:

* `without(sourceArr, itemsToRemove)`: 
A function that takes in a source array and an itemsToRemove arrays and 
returns only the items from the source array that are not in the itemsToRemove array.

*`takeUntil(array, callback)`: 
A function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.

* `middle(arr)`: 
A function that takes in an array and returns middle most element of the array.

* `map(array, callback)`: 
A function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.

* `head(arr)`: 
A function that takes in an array and returns the first element in the array.

* `findKeyByValue(obj, val)`: 
A function that takes in an object and a value and returns the first key that corresponds to that value.

* `findKey(obj, callback)`: 
A function that takes in an object and callback and returns the first key that meets the criteria specified in callback.

* `eqObjects(object1, object2)`: 
A function that takes in 2 objects and return true if they are equal and false otherwise.

* `eqArrays(arr1, arr2)`: 
A function that takes in 2 arrays and returns true if the arrays are equal and false otherwise.

* `countOnly(allItems, itemsToCount)`: 
A function that takes in a collection of items and returns a specific subset of those items.
--allItems: an array of strings that we need to look through
--itemsToCount: an object specifying what to count

* `assertObjectsEqual(actual, expected)`: 
A function that takes in 2 objects and returns true if they are equal and false otherwise.

* `assertEqual(actual, expected)`: 
A function that takes in 2 values and returns true if they are equal and false otherwise.

* `assertArraysEqual(arr1, arr2)`: 
A function that takes in 2 arrays and returns true if they are equal and false otherwise.



