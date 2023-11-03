// Dates

let myDate = new Date()
// console.log(myDate.toString()); // Fri Nov 03 2023 10:39:00 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); // Fri Nov 03 2023
// console.log(myDate.toLocaleString()); // 11/3/2023, 10:42:18 AM
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023 -> in js month count starts from 0
// let myCreatedDate1 = new Date(2023, 11, 23);
// console.log(myCreatedDate1.toDateString()); // Tue Jan 23 2023 -> in js month count starts from 0

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  // -> 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14") // -> 1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp); // 1699009717447
// console.log(myCreatedDate.getTime()); // 1673654400000
// console.log(Math.floor(Date.now()/1000)); // 1699009798

let newDate = new Date();
console.log(newDate); // 2023-11-03T11:10:36.346Z
console.log(newDate.getMonth() + 1); // 11
console.log(newDate.getDay()); // 5

// String Interpolation, below format is used in console.log()
// `${newDate.getDay()} and the time `


newDate.toLocaleString('default', {
    weekday: "long",
    
})