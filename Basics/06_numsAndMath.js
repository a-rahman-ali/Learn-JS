// score cannot be modified, as it is declared const
const score = 400 
// here the type is automatically defined by the compiler
// console.log(score); // 400

const balance = new Number(100);
//here the type is strictly declared(specifically casted into Number) before compiling 
// it also helps us access the properties/methods through prototype
// console.log(balance); //[Number; 100] -> strictly number only

// console.log(balance.toString()); // 100 
// -> gets converted to string hence all the methods of string become accessible
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(1)); // 100.0
// console.log(balance.toFixed(4)); // 100.0000


const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3)); // 124
// console.log(otherNumber.toPrecision(4)); // 123.9
// therefore the consideration always starts from before decimal
// priority may also be given to digits after decimal points

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // 1,000,000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random()); // always we get the values between 0-1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // value between 10-20