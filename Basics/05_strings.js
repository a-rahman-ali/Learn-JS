// Strings in js can be represented using single-quotes as well as double quotes

const name = "abdul"
const repoCount = 5

// console.log(name + repoCount + " Value"); // abdul5 Value

// modern day convention is to make use of back-ticks``
// String Interpolation
// Here we make use of place-holders like ${variable_name}
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// The advantage of using this syntax is that we can do multiple operations on the content of placeholders
// such as, toUppercase(), toLowerCase(), etc.
// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('Archery-Game')
// by making use of above format we can achieve the key-value pair mapping of object type string
// and also get access to many built-in functions of String class
// console.log(gameName[0]); //A
// console.log(gameName.__proto__); //{}

// console.log(gameName.length); // 12
// console.log(gameName.toUpperCase()); // ARCHERY-GAME
// console.log(gameName.charAt(2)); // c
// console.log(gameName.indexOf('r')); // 1
// console.log(gameName.lastIndexOf('r')); //5

const newString = gameName.substring(0, 4)
// 4 is not-inclusive
// console.log(newString); // Arch

const anotherString = "Archery".slice(-8, 4)
// console.log(anotherString); //Arch

const newStringOne = "   rahman    "
// console.log(newStringOne); //"   rahman    "
// console.log(newStringOne.trim()); // rahman

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-')) // https://hitesh.com/hitesh-choudhary
// console.log(url.includes('sundar')) //false
// console.log(url);

// console.log(gameName.split('-')); // ['Archery', 'Game']

/* *************
    // Note: Here we can see that after the use of the method along with variable reference,
    // functions(toUpperCase(), toLowerCase(), replace()) doesn't change the original value
    // this might be due to passByValue feature of javascript

************* */