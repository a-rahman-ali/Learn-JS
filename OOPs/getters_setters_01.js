// When we have given one among the getter/setter, 
// then it is necessary to give the other getter/setter for the same property
// else it would give an error

// But if we give getter and setter to some property,
// leave the other property without giving getter and setter
// then our code won't give any error

// We may encounter following Error
// RangeError: Maximum call stack size exceeded
// if we have the constructor as well as setter, due to race condition
// to avoid this we make use of _propertyName to differentiate from constructors
// here we've used _email, _password


class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    // get password(){
    //     return `${this._password}hitesh`
    // }

    // set password(value){
    //     this._password = value
    // }
}

const abdul = new User("h@rahman.ai", "abc")
console.log(abdul.email);