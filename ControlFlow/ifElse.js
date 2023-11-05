// if-syntax
// if (condition) {
    
// }
if(2 == "2"){ 
    // the operator == checks for equality value by performing typecasting if possible
    // the typechecking is not done
    // But if we use === then, the typeof the literals is also checked, 
    // as it is strictly-equal-to-operator
    console.log("Executed"); // Executed
}

const isUserloggedIn = true
const temperature = 41

// if-else syntax
// if (condition) {
    
// } else {
    
// }
if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
console.log("Execute"); // this line is anyways executed

// <, >, <=, >=, ==, !=, ===, !== (strictly not equal to operator)

const score = 200
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); // power is not defined


const balance = 1000
// here this is called as Implicit Scope, but this is highly unreadable
// if (balance > 500) console.log("test"),console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 750");   
} else {
    console.log("less than 1200");
}

// real-life-example
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && !(2==3)) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}