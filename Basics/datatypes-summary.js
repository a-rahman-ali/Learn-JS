// Javascript is a Dynamically Typed Language

// On the basis of; The way data is stored and the way data is accessed, datatypes are classified into 2 types
// They are, -> Primitive and -> Non-Primitive/Reference Types

//  Primitive -- Call by Value

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 //number
const scoreValue = 100.3 //number
// console.log(typeof scoreValue);

const isLoggedIn = false
const outsideTemp = null
console.log(typeof outsideTemp); //object
let userEmail;

const id = Symbol('123')
// console.log(typeof id); // symbol
const anotherId = Symbol('123')

// console.log(id == anotherId); //false
// console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros); //object

// This is just a object-literal/anonymous object/ which is eligible for Garbage Collection
// {
//     name: "randomObject",
//     age: 10,
//     id: "01",
// }

let myObj = {
    name: "abdul",
    age: 22,
}
console.log(typeof myObj); //object

// function can be treated as a variable in js
const myFunction = function(){
    console.log("Hello world");
}
myFunction
console.log(typeof myFunction); //function -> here typeof returns function but it is called object function

console.log(typeof anotherId);

// Reference Doucmentation for datatypes
// https://262.ecma-international.org/5.1/#sec-11.4.3