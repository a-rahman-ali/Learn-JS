// Javascript follows Prototypal Inheritance

// Prototypal inheritance is a language feature in JavaScript 
// that allows objects to inherit properties from another object via the prototype linkage.
// Each object in JavaScript has a private property that holds a link to another object called its prototype. 
// The prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. 
// Prototypal inheritance allows objects and methods to be shared, extended, and copied. 
// It is used to add new properties and methods to an existing object constructor, 
// and JS code can inherit properties from a prototype.


// let myName = "rahman     "
// let mychannel = "chai     "

// console.log(myName.length); // 11
// console.log(myName.trim().length); // 6
// console.log(myName.trueLength); // undefined


let myHeros = ["thor", "spiderman"]
// myHeros.prototype

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rahman = function(){
    console.log(`rahman is present in all objects`);
}

Array.prototype.heyRahman = function(){
    console.log(`Rahman says hello`);
}

// heroPower.rahman() // rahman is present in all objects
// myHeros.rahman() // rahman is present in all objects
// myHeros.heyRahman() // Rahman says hello
// heroPower.heyRahman() // cannot be accessible due to heirarchy

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // by doing this TASupport inherits TeachingSupport
}

Teacher.__proto__ = User // by doing this Teacher inherits properties of User

// modern syntax
// 1st parameter is the child, 2nd parameter is parent
Object.setPrototypeOf(TeachingSupport, Teacher)

// acheiving the thing we wanted to achieve in line 20
let anotherUsername = "ChaiAurCode     "
// The following is injecting our own function inside String
// so it is accessible in line-84,87
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
// ChaiAurCode     
// True length is: 11
" hi tesh".trueLength()
//  hi tesh
// True length is: 7
"iceTea".trueLength()
// iceTea
// True length is: 6