// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num); 
}
// 1
// 2
// 3
// 4
// 5

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is  
// Each char is w
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is !


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('UAE', "United Arab Emirates")
map.set('IN', "India") // doesn't get added, only unique values are added as keys

// console.log(map);
// Map(4) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France',
//     'UAE' => 'United Arab Emirates'
// }

for (const key of map) {
    console.log(key);
}
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]
// [ 'UAE', 'United Arab Emirates' ]

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
// IN :- India
// USA :- United States of America
// Fr :- France
// UAE :- United Arab Emirates

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
// TypeError: myObject is not iterable