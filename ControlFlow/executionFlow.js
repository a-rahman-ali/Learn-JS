// Javascript is Single-Threaded

// Javascript Execution Context
// -> Global Execution Context              
// -> Functional/Function Execution Context 
// -> Eval Execution Context when studying Mongoose Documentation



// {} -> Global EC 
// GEC is referred to by this

// Browser's GEC is Window
// 

// Code Execution phases in Javascript
// Memory Creation Phase -> Memory Allocation phase
// Execution Phase -> Actual Execution phase

// Let's consider the following code snippet
// and understand how Javascript execution works
let val1 = 10;
let val2 = 5;
function addNums(num1, num2){
    let total = num1 + num2;
    return total;
}
let res = addNums(val1, val2);
let res2 = addNums(10, 2);

// Steps of Execution of above code
// --------------------------------
// Global Eexcution Context gets created
// Memory phase 
//      -> val1 = undefined
//      -> val2 = undefined
//      -> addNums() = function definition code
//      -> res1 = undefined
//      -> res2 = undefined
// Execution phase 
//      -> val1 = 10
//      -> val2 = 5
//      -> addNums -- nothing happens here
//      -> res1 = addNums()
//             -> new Execution Context is created here
//             -> It would be a Funtional Execution Context
//             -> It leads to creation of New Variable Environment + Execution Thread
//             -> Here Memory Phase and Execution phase is to be executed
//                  -> Memory Phase
//                      -> num1 = undefined
//                      -> num2 = undefined
//                      -> total = undefined
//                  -> Execution Phase
//                      -> num1 = 10
//                      -> num2 = 5
//                      -> total = 10+5 = 15
//                      -> now this total is returned to the Global Execution Context
// here in this indentation the value of total is returned
//      -> Here the current Execution Context gets deleted
//      -> res2 = undefined
//             -> new Execution Context is created here
//             -> It would be a Funtional Execution Context
//             -> It leads to creation of New Variable Environment + Execution Thread
//             -> Here Memory Phase and Execution phase is to be executed
//                  -> Memory Phase
//                      -> num1 = undefined
//                      -> num2 = undefined
//                      -> total = undefined
//                  -> Execution Phase
//                      -> num1 = 10
//                      -> num2 = 2
//                      -> total = 10+2 = 12
//                      -> now this total is returned to the Global Execution Context
// here in this indentation the value of total is returned
//      -> Here the current Execution Context gets deleted


// Call Stacks are created in the Global Execution Context
// And the removal of stacks of the functions follows the order of LIFO

// Practical in Inspect of Browser and view in Call Stack section

// Example-1
// function one(){
//     console.log("one");
// }
// function two(){
//     console.log("two");
// }
// function three(){
//     console.log("three");
// }

// one()
// two()
// three()

// Example-2
function one(){
    console.log("one");
    two();
}
function two(){
    console.log("two");
    three();
}
function three(){
    console.log("three");
}

one()
two()
three()

