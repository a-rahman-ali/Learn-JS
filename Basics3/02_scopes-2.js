/* Lecture-2 on Scopes */
//Nested Scopes

// Concept of scopes in nested functions
function one(){
    const username = "abdul" // accessible inside the function one()

    function two(){
        const website = "youtube"
        console.log(username); //abdul
    }
    // console.log(website); // Reference Error -> not accessible inside one due to declaration in two()

    two()

}

one()

// Concept of scope in if-else

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website); // hitesh youtube
    }
    // console.log(website); // Reference Error due to Out Of Scope
}
// console.log(username); // Reference Error due to Out Of Scope


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log("Above function declaration: ", addOne(5)) // Above function declaration:  6

function addOne(num){
    return num + 1
}
// console.log("Below function declaration: ", addOne(5)) // Below function declaration:  6



// console.log("Above: ", addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
console.log("Below: ", addTwo(5)); // Below: 7

// The more about this concepts would be learnt in the concept of Hoisting