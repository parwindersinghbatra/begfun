# Begfun

This package provides a set of utility functions.

## Installation
You can install this package via npm:

```console
$ npm install begfun
```

## Usage
```js

const {
  sum,
  mapToDouble,
  sortBy,
  reverseString,
  isPrime,
  factorial,
  removeDuplicates,
  max,
  min,
  average
} = require('array-utility-functions');

const arr = [1, 2, 3, 4, 5];

console.log(sum(arr)); // Output: 15
console.log(mapToDouble(arr)); // Output: [2, 4, 6, 8, 10]
console.log(sortBy(arr)); // Output: [1, 2, 3, 4, 5]
console.log(reverseString('hello')); // Output: 'olleh'
console.log(isPrime(7)); // Output: true
console.log(factorial(5)); // Output: 120
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(max(arr)); // Output: 5
console.log(min(arr)); // Output: 1
console.log(average(arr)); // Output: 3

```

## Functions

sum(arr)
Returns the sum of all elements in the array.

mapToDouble(arr)
Returns a new array with each element doubled.

sortBy(arr)
Returns the array sorted in ascending order.

reverseString(string)
Returns a reversed string.

isPrime(number)
Checks if a number is prime.

factorial(number)
Returns the factorial of a number.

removeDuplicates(arr)
Returns an array with duplicate elements removed.

max(arr)
Returns the maximum value in the array.

min(arr)
Returns the minimum value in the array.

average(arr)
Returns the average of all elements in the array.