// array

// Documentation Reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


// Array is an object that enables us to store multiple items under one single name
// Arrays are resizable in js
// Arrays can contain multiple datatype elements
// Array elements are accessible using indices(`0` - `n-1`)
// With arrays if we try re-assigning the existing array, shallow copy takes place
// Shallow copy refers to the sharing of same reference of array variable
// Deep copy do not share the same references
// 
// 

// Different ways to declare and initialize arrays
const myArr = [10, 11, 21, 33, 44, 45]
const myHeros = ["thor", "ironman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); // 11

/* ********* Array Methods ********** */

// myArr.push(6)
// myArr.push(7)
// console.log(myArr); // [10, 11, 21, 33, 44, 45,  6,  7 ]
// myArr.pop()
// console.log(myArr); // [10, 11, 21, 33, 44, 45,  6]

// myArr.unshift(9) // inserts elements at the start
// myArr.shift() // removes element from the start

// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(3)); // -1
// console.log(myArr2.indexOf(3)); // 2

const newArr = myArr.join() // Adds all the elements into a string with default seperator being ,
// console.log(myArr); // [10, 11, 21, 33, 44, 45,  6,  7 ]
// console.log( newArr); // 10,11,21,33,44,45,6,7
// console.log(typeof myArr); // object
// console.log(typeof newArr); // string

// slice, splice

console.log("A ", myArr); // A [10, 11, 21, 33, 44, 45]

const myn1 = myArr.slice(1, 3); // 3rd index not included

console.log(myn1); // [11, 21]
console.log("B ", myArr); // B [10, 11, 21, 33, 44, 45]


const myn2 = myArr.splice(1, 3) // 3rd index is included but this is not actual point to be addressed
// It not only includes the second parameter as index but,
// *** modifies the original array by cutting it down from the mentioned index value
// In simple words the array gets splitted and the indices after 2nd parameter remain back in original array
console.log("C ", myArr);
console.log(myn2);