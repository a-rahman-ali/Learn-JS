// De-structurting of Objects 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor); // hitesh
// console.log(course["courseInstructor"]); // hitesh

const {courseInstructor} = course
// console.log(courseInstructor); // hitesh
// This below line of code is called as destructuring 
const {courseInstructor: instructor} = course //this line is giving error if line-17,18 are commented

// console.log(courseInstructor); // error if line 11 is commented
// console.log(instructor); // hitesh
console.log(typeof instructor); // string


// Example of JSON format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Example of Array of JSON data
[
    {},
    {},
    {}
]

/* 
    It is better to refer this concept when done with complete js and working with react.js
    It has been explained here as an example of how de-structuring is used in react
*/
// The following code snippet is of react, you need not worry about it as of now
// let's consider the following method, (generally called as props in development)
const navbar = (props) =>{ 
    console.log(props);
}
// suppose we're calling the function navbar() as follows
navbar(company = "hitesh");
// when the control goes to function body, it actually has "props" as "default parameter" as follows
// 
// const navbar = (props) =>{ 
//     console.log();
// }
// 
// so here when company variable is to be accessed then it is done as follows
// const navbar = (props) =>{ 
    // console.log(props.company); // make sure that props is an object
// }
// 
// But it is not done in that way, instead they're accessed as follows
// const navbar = ({company}) =>{ 
//     console.log();
// }
// 
// Not only objects, arrays can also be destructured and that will be exlpained in other lecture
