// getters and setters using Object
// this is more older practice

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email); // H@HC.COM

// refer proposal in es22 to know about using # instead of _
// https://2ality.com/2019/07/private-class-fields.html