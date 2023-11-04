// singleton -> created using  constructors
// Object.create

// object literals

const mySym = Symbol("key1")
// const JsUser = {}; // empty object

const JsUser = {
    name: "Rahman",
    "full name": "Abdul Rahman",
    [mySym]: "mykey1", //surrounding by square brackets syntactically makes it symbol
    age: 18,
    location: "Hyderabad",
    email: "ar@ar.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // ar@ar.com
// console.log(JsUser["email"]) // ar@ar.com
// console.log(JsUser["full name"]) // Abdul Rahman
// console.log(JsUser[mySym]) // mykey1

JsUser.email = "ar@chatgpt.com"
// Object.freeze(JsUser) // further changes cannot be made to the object JsUser, we don't get any error.
JsUser.email = "ar@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    // making use of String Interpolation
    // this is a key word which refers to the current object
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting); 
// [Function (anonymous)]
// -> just gives the return type of function/ reference of function 
// -> function doesn't get executed

console.log(JsUser.greeting()); 
// Hello JS user
// undefined

console.log(JsUser.greetingTwo());
// Hello JS user, Rahman
// undefined

// undefined will be covered in the upcoming lectures
// most of the times we use . (dot operator) to access the functions of object
// But there may arise some cases where we've to make use of [] 