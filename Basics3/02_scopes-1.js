/* Lecture-1 on Scopes */
var c = 300 // var is a global scope variable and used in specific cases only
let a = 240
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a); // INNER: 10
    
}
// console.log("OUTER(a from line-2): ", a); // OUTER(a from line-2):  240 -> here the a of line-2 is being logged onto the console
// console.log(b); // Reference Error b is not defines cannot be accessed outside of scope
// console.log(c); // 300 as scope of var is global

// *** Global scopes in node environment is different than that of in Browser Engine


