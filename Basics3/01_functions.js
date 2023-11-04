// All about functions

function sayMyName(){
    console.log("A");
    console.log("-");
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("M");
    console.log("A");
    console.log("N");
}

// sayMyName //-> function reference
// console.log(sayMyName); // [Function: sayMyName]
// sayMyName();

// function addTwoNumbers(number1, number2){ //parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("Abdul Rahman"); // statement not reachable but no error
}

const result = addTwoNumbers(3, 5) // arguments

// console.log("Result: ", result); // 8


function loginUserMessage(username = "sam"){ 
    //in parameter if we pass just `username` instead of `username = "sam"` output will be comment of line-43
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage()); // undefined just logged in

// console.log(loginUserMessage("abdul")) // abdul just logged in
// console.log(loginUserMessage("rahman")) // rahman just logged in
// console.log(loginUserMessage("")) // <emptystring> just logged in
// console.log(loginUserMessage()); // sam just logged in -> if the if-block is not present
// console.log(loginUserMessage()); // undefined just logged in -> if the if-block is not present and username="sam" is absent in parameter


/* <---- 2nd Lecture on functions ----> */

/* Passing Objects as parameters to the functions */

// Variable no. of arguments (refer for var-args and ellipses(...) in java)
// rest operator(...) in javascript
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000)) // [ 500, 2000] -> here 200, 400 fit into val1 and val2 respectively

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    // in the below statement we're using String Interpolation with ${}
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user) // Username is hitesh and price is undefined
// handleObject(user) // Username is hitesh and price is 199 -> if in user object "price" was used instead of "prices"

// In the below code we're directly passing the anonymous object inside the function call
handleObject({
    username: "sam",
    price: 399
})
// Username is sam and price is 399

/* Passing Arrays as parameters to the functions */
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([200, 450, 590, 1000])); // 450