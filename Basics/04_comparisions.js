// console.log(2 > 1); //true
// console.log(2 >= 1); //true
// console.log(2 < 1); //false
// console.log(2 == 1); // false
// console.log(2 != 1); // true


// console.log("2" > 1); // true --> sometimes the result is not predictable
// console.log("02" > 1); // true

// Checking with null

// The reason is that an equality check == and comparisions > < >= <= work differently
// Comparisions convert null to a number, treating it as 0
// That's why null >= 0 is true and null > 0 is false
// Therefore null <= 0 -> true

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// Checking with undefined
// console.log(undefined == 0); // false
// console.log(undefined < 0); // false
// console.log(undefined > 0); // false
// console.log(undefined <= 0); // false
// console.log(undefined >= 0); // false

// Strict Check operator "==="
// === 
console.log("2" == 2); // true -> here the type conversion occurs
console.log("2" === 2); // false -> type conversion doesn't occur
