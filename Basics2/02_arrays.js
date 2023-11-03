const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // gets added as whole array itself
// console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); // flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Below process is called spreading  aka making use of Spread Operator
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) 
// flat() returns an array in which the elements have been added recursively upto to the specified depth
// Infinity means max available depth
console.log(real_another_array); 
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
// ]


console.log(Array.isArray("Abdul")) // false
console.log(Array.from("Rahman")) // ['R', 'a', 'h', 'm', 'a', 'n']
console.log(Array.from({name: "rahman"})) // interesting // o/p: []
// from() returns [] if it is unable to create an array from given parameter

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]