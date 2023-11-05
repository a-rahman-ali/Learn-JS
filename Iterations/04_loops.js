// for in loop

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    java: "java",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// java shortcut is for java
// swift shortcut is for swift by apple

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
}
// 0
// 1
// 2
// 3
// 4

for (const key in programming) {
    // console.log(programming[key]);
}
// js
// rb
// py
// java
// cpp

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
// no output

// Actually the map is not iterable in js