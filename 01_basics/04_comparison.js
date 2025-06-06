// Avoid all this type of comparison

console.log(2 > "2")
console.log("2" > 2)
console.log("2" >= 2)
console.log(2 == "2")


// == and > < behaves differently with null, > and < converts null to 0 but == doesnt
console.log(null == 0)
console.log(null >= 0)

//  === operator: it compares dataype as well, so when it doesnt matches datatypes it returns false
console.log(2 === "2") //false

//
console.log(undefined == 0)
console.log(undefined >= 0)
console.log(undefined <= 0)

// ------ Stacks vs Heap ------

// Stack:

let myId = 2
let anotherId = myId
anotherId = 3

console.log(myId)
console.log(anotherId)

// changing anotherId won't change myId because anotherId has just copy of myId

// Heap:

let userOne = {
    email : "majid@google.com",
    pass : 123321
};

let userTwo = userOne
userTwo.email = "majid@outlook.com"

console.log(userOne.email)
console.log(userTwo.email)

//Now both userOne and UserTwo are pointing to same object so changing any value will reflects original values