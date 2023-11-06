const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`); // Username: hitesh
        // console.log(this);
        // {
        //   username: 'hitesh',
        //   loginCount: 8,
        //   signedIn: true,
        //   getUserDetails: [Function: getUserDetails]
        // }
        console.log("Inside function of user");
    }
}

// console.log(user.username) // hitesh

// console.log(user.getUserDetails()); // undefined

// console.log(this); // {}

// console.log(user.getUserDetails()); // uncomment this to execute commented lines in function of user

// if we have to create another similar user, 
// then we've to create the copy of above code (line 1-18)
// and rename the variable(as user2) and then use that object


// Constructor Functions
// Ex: Promise(), Map(), Date()
// const promiseOne = new Promise();
// const map = new Map();
// const date = new Date();

// importance of new keyword

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this // even if we don't write return statement it is implicitly returned
}

// const userOne = User("hitesh", 12, true)
// console.log(userOne); // main required o/p is last 4 lines
        // <ref *1> Object [global] {
        //   global: [Circular *1],
        //   clearImmediate: [Function: clearImmediate],
        //   setImmediate: [Function: setImmediate] {
        //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
        //   },
        //   clearInterval: [Function: clearInterval],
        //   clearTimeout: [Function: clearTimeout],
        //   setInterval: [Function: setInterval],
        //   setTimeout: [Function: setTimeout] {
        //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
        //   },
        //   queueMicrotask: [Function: queueMicrotask],
        //   structuredClone: [Getter/Setter],
        //   atob: [Getter/Setter],
        //   btoa: [Getter/Setter],
        //   performance: [Getter/Setter],
        //   fetch: [AsyncFunction: fetch],
        //   crypto: [Getter],
        //   username: 'hitesh', 
        //   loginCount: 12,
        //   isLoggedIn: true,
        //   greeting: [Function (anonymous)]
        // }
// if we create another user as userTwo, then try printing the values
// const userTwo = User("ChaiAurCode", 11, false)
// console.log(userOne);
// here the last 4 lines of o/p is as follows
    // username: 'ChaiAurCode',
    // loginCount: 11,
    // isLoggedIn: false,
    // greeting: [Function (anonymous)]
// here the values of userTwo have overridden the values of userOne and userOne values have been changed

// To Avoid this problem, we need to follow below approach by use of new keyword


const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)

// console.log(userOne);
// User {
//     username: 'hitesh',
//     loginCount: 12,
//     isLoggedIn: true,
//     greeting: [Function (anonymous)]
// }

// console.log(userTwo);
// User {
    //     username: 'ChaiAurCode',
    //     loginCount: 11,
    //     isLoggedIn: false,
    //     greeting: [Function (anonymous)]
    // }
//
// console.log(userOne.constructor); // [Function: User]

// instanceof operator
console.log(userOne instanceof User); // true

const sample = new Map();
console.log(sample instanceof User); // false

// Things that happen when new keyword is encountered
// -> When we use new keyword, then an empty object gets created
// -> Constructor Function is called due to new keyword
//      -> constructor function takes all the arguments, packs it and then return it
// -> Everything coming from constructor function gets injected into "this" keyword
// -> Finally an Object is returned and it is stored inside the reference variable provided