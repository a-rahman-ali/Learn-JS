function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5)); // 25
console.log(multipleBy5.power); // 2
// console.log(multipleBy5.power(2)); // Error power is not a function in multiplyBy5.js
console.log(multipleBy5.prototype); // {}

// one more example to understand more
function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`username is ${this.username}`); 
    console.log(`price is ${this.score}`); 
}

const chai = new createUser("chai", 25)
chai.printMe()
// username is chai
// price is 25
console.log(chai.increment()); // undefined
chai.printMe()
// username is chai
// price is 26

const tea = createUser("tea", 250)
// tea.printMe();
// TypeError: Cannot read properties of undefined (reading 'printMe')

// const tea = new createUser("tea", 250)
// console.log(tea.increment()); // undefined
// tea.printMe();
// username is tea
// price is 251

// Important Notes about the functionality of new keyword
/*

    Here's what happens behind the scenes when the new keyword is used:

    A new object is created: 
        The new keyword initiates the creation of a new JavaScript object.

    A prototype is linked: 
        The newly created object gets linked to the prototype property of the constructor function. 
        This means that it has access to properties and methods defined on the constructor's prototype.

    The constructor is called: 
        The constructor function is called with the specified arguments and 
        this is bound to the newly created object. 
        If no explicit return value is specified from the constructor, 
        JavaScript assumes this, the newly created object, to be the intended return value.

    The new object is returned: 
        After the constructor function has been called, 
        if it doesn't return a non-primitive value (object, array, function, etc.), 
        the newly created object is returned.

*/