// We know when we've a js program being executed then,
// Global Execution Context is created in the stack
// Over that Stack frame, we get other stack frame if we have one more function to be exeucted
// Then if we have one more function, one more stack frame is created in the stack frame
// Be clear that each stack frame has its own Execution Context
// Suppose if we encounter a function which calls another function while still the current stack frame being in the stack
// then another stack frame of new frame gets created
// So then if we've any function returning or referring "this" keyword
// then that "this" keyword will be referring to the Global Execution Context

// Incase of Browser, Global Execution Context refers to Window
// Incase of Node Environment, Global Execution Context refers to empty object {}

// Example of above concept

// Assume that you're making an application similar to Discord
// Where you've task to set the username of user and for that you've to
// perform complex database operations to be performed so as to check
// whether there exists any username with the name being entered.
function SetUsername(username){
    //complex DB calls to check already existing users for their usernames
    this.username = username
    console.log("called"); 
    // we've this console.log() over here so as to check whether username is set or not

}

function createUser(username, email, password){
    // SetUsername(username) 
    // this invokes function but the username isn't assigned
    // createUser { email: 'chai@fb.com', password: '123' }
    
    SetUsername.call(this, username)
    // this invokes function and the username is also assigned
    // because we've passed in this which refers to the this of createUser Context
    // hence it saves from the exhaustion of variable from the call stacks frame
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); 
//createUser { username: 'chai', email: 'chai@fb.com', password: '123' }