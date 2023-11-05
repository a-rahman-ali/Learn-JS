// const userEmail = "ar@ar.com";
// if anything is there inside the string it is considered as the TRUTHY value
// const userEmail = "";
// if the string is empty then it is considered as FALSY value

const userEmail = []
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// The following are considered falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// console.log(false == 0); // true
// console.log(false == ''); // true
// console.log(0 == ''); // true

// Nullish Coalescing Operator (??) -- totally dependent on null, undefined
let val1;
// val1 = 5 ?? 10
// console.log(val1); // 5 

// val1 = null ?? 10
// console.log(val1); // 10

// val1 = undefined ?? 15
// console.log(val1); // 15

val1 = null ?? 10 ?? 20
console.log(val1); // 10

// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")