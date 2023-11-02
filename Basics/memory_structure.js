// Two types of memory
// -> Stack (Primitive values are stored)
// -> Heap (Non-Primitive values are stored)

let myYoutubeName = "Abdul-Rahman"; //stored in stack
let anotherName = myYoutubeName;

console.log(anotherName);
anotherName = "A-Rahman";
console.log(anotherName);
console.log(myYoutubeName);
// here modification of one value doesn't affect the other
// becoz, when we are assigning the value of one variable to the other, a copy is created and then assigned
// hence, the original value remains intact


let user1={
    email: "user1@gpay.com",
    upiId: "user1@ybl"
}
console.log(user1);
let user2 = user1;
user2.email = "user2@phonepay.com";
console.log(user1);
// But here, when we tried to modify the value of email of user2,
// The value of email for user1 also got modified due to,
// the refernce being pointed is same by both the objects