// let score = 33; //typeof returns number
// let score = "Abdul"; // typeof returns string

// Can use any of the two below
// console.log(typeof score);
// console.log(typeof(score));

let scoreOne = "43";
// console.log(typeof scoreOne);
// Here Number is Class
let valueInNumber = Number(scoreOne); // This is similar to TypeCasting
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// When we try to convert the LHS values to Number,
// we'll get the following outputs respectively

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = "Abdul"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// When we try to convert the LHS values to Boolean,
// we'll get the following outputs respectively

// 1 => true; 0 => false
// "" => false
// "abdul" => true

// Conversion from number to String
let someNumber = 33

// console.log(someNumber);
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); // o/p: -3 

// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*2); // 4
// console.log(2**3); // 8
// console.log(2/3); // 0.6666666666666666
// console.log(2%3); // 2

let str1 = "hello"
let str2 = " abdul"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log( (3 + 4) * 5 % 3); // (7)*5%3 -> 35%3 -> 2

console.log(+true); // 1
// console.log(true+); // Error
console.log(+""); // 0

// The following is code is highly discouraged in industry standards
let num1, num2, num3
num1 = num2 = num3 = 2 + 2
// console.log(num1, num2, num3);

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
// study about postfix and prefix operators from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion