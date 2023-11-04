// Here in the below line we're making use of Constructor
// It just creates an empty object
// const tinderUser = new Object() // -> creates a Singleton Object
// console.log(tinderUser); // {}

const tinderUser = {}; // -> creates non-Singleton Object
// console.log(tinderUser); // {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname);
// { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }

// console.log(regularUser.fullname.userfullname);
// { firstname: 'hitesh', lastname: 'choudhary' }

// console.log(regularUser.fullname.userfullname.firstname);
// hitesh

// console.log(regularUser.fullname?.userfullname);
// The above format fullname? is called as Optional Chaining
// It helps us when the fullname doesn't exist, what should be done?, ?? etc.
// It is mainly used when working with APIs
// 

/* ------ Combining of Objects ------*/
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1, obj2, obj4)
// The above line works fine but still below line of code is to be followed
// The obj2, obj4 are appended in obj1
// console.log(obj3 == obj1); // true

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// New object being created and obj1, obj2, obj4 are appended inside new object
// console.log(obj3 == obj1); // false
// console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

/* ***
 The above code can be done as follows also,
 but in the above case, anonymous object is being created,
 but in the below case, an object with name target is being created
*/
// const obj3 = Object.assign(target={}, obj1, obj2, obj4)
// console.log(target);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(target == obj3);
// true

// making use of spread operator
const obj3 = {...obj1, ...obj2, ...obj4} // ->
// console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// Array of Objects
const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]
users[1].email
// console.log(users[2].email);
console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// Expalnation about following things is in objects_03.js

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]