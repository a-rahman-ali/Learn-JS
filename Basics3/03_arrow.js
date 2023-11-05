// Arrow Functions

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage() 
// hitesh , welcome to website
// {
//     username: 'hitesh',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
// }
user.username = "sam"
// user.welcomeMessage()
// sam , welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

// this refers to the current context
// console.log(this); // {} 
// -> when this is run in Browser Console it doesn't return empty object
// -> It returns Window object, as Window is the Global Object in any Browser,
// -> That's the reason, due to which we'll be able to manipulate the whole Window of Browser
// by capturing all their events such as Click, FormSubmit, etc.

function chai(){
    let username = "hitesh"
    console.log(this); // returns the following
    /*
        <ref *1> Object [global] {
        global: [Circular *1],
        clearImmediate: [Function: clearImmediate],
        setImmediate: [Function: setImmediate] {
            [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        clearInterval: [Function: clearInterval],
        clearTimeout: [Function: clearTimeout],
        setInterval: [Function: setInterval],
        setTimeout: [Function: setTimeout] {
            [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        queueMicrotask: [Function: queueMicrotask],
        structuredClone: [Getter/Setter],
        atob: [Getter/Setter],
        btoa: [Getter/Setter],
        performance: [Getter/Setter],
        fetch: [AsyncFunction: fetch],
        crypto: [Getter]
        }
        undefined
     */
    console.log(this.username); // undefined
    // this is working inside objects only but not inside functions
}
// chai()

// const chai1 = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai1 =  () => {
    let username = "hitesh"
    console.log(this.username);
}

chai1() // we get same output for both the above implementations of chai1()
// undefined -> o/p for function() implementation
// undefined -> o/p for ()=> implementation

// Discussion about arrow functions (<function parameters>) => { // function body}

// Basics Arrow Function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4)) // 7

// Implicit Returned were we need not use {}, return for single statements
// const addTwo = (num1, num2) =>  num1 + num2
// console.log(addTwo(3, 4)) // 7

// This implementation is highly used in ReactJs
// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(3, 4)) // 7

// inside parenthesis "()" we use {} to return the object
// if we didn't use () and directly try to return object as {},
// then it would give undefined (the default return type of functions in js) due to 
// ambiguity between normal function and object return type
const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3, 4)) // {username: 'hitesh'}

// arrow functions being used with arrays
const myArray = [2, 5, 3, 7, 8]
// Classic function in forEach()
// myArray.forEach(function() {})

// Arrow function in forEach()
// myArray.forEach(() => {})