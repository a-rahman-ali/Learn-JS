// inheritance in js

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.logMe()
// USERNAME is chai
chai.addCourse();
// A new course was added by chai

const masalaChai = new User("masalaChai")
// masalaChai.addCourse(); // TypeError: masalaChai.addCourse is not a function
                        // doesn't have access to the child class methods
masalaChai.logMe()
// USERNAME is masalaChai

console.log(chai === masalaChai);
// false
console.log(chai instanceof Teacher);
// true
console.log(chai instanceof User);
// true