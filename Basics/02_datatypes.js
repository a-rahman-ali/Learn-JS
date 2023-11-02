"use strict"; // treat all JS code as newer version
            // but the latest versions have become so advanced that,
            // this line of code is also not much necssary

// alert("hello"); // works fine in browser
// alert( 3 + 3); // we are using nodejs, not browser

// the below code is valid but readability is poor
console.log(3 
    +
     3) // code readability should be high

console.log("Abdul Rahman")

// one can refer mdn docs for javascript references but this is not the official documentation
// Official doucmentation is tc39.es (ECMAScript Language Specification)
// ECMA is the International Standards

let name = "Abdul" // String
let age = 18 // Number
let isLoggedIn = false //Boolean
let state; //undefined

// number => 2 to power 53 is the range
// bigint (higher ranges used in stock markets, etc.)
// string => "" (enclosed in double quotes)
// boolean => true/false
// null => standalone value (it is a special value used to represent empty values, it is just kind of literal)
// undefined => (when a variable is declared but not initialised)
// symbol => unique (used in react, figma, etc.)

// typeof function
console.log(typeof(""));
console.log(typeof('a'));
console.log(typeof(10));
console.log(typeof(true));


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
// Sometimes typeof null is considered as the error in javascript