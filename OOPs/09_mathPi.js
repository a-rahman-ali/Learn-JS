const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

// console.log(Math.PI); // 3.141592653589793
// Math.PI = 5
// console.log(Math.PI); // 3.141592653589793

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }
  

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true, // name will be printed when for-of is applied
    // enumerable: false // name will not be printed when for-of is applied 
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}

// o/p when enumerable is true
    // name : ginger chai
    // price : 250
    // isAvailable : true
//    
// o/p when enumerable is false
    // price : 250
    // isAvailable : true
    