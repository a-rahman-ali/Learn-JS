// Immediatly Invoked Function Expressions (IIFE)

// As soon as the function is written, we need to execute it immediatly
// We need such kind of functions when connecting to the Database

// General Function and Immediate invocation 
// function chai(){
//     console.log("DB Connected");
// }
// chai()

// To avoid the Global Scope Pollution we make use of IIFE 
// IIFE Implementation
(function chai(){
    console.log("DB Connected, invocation with IIFE");
})();

// first paranthesis for function wrapping
// second paranthesis for invocation
// ()()

// Called as Named IIFE
// (function funcName(){})(); 
// here the ; is very much necessary so as to close the context after invocation

// Use of Arrow Functions in IIFE
// Called as General IIFE
// (() => {})(); 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')