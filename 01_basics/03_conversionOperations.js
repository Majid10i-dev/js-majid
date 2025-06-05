let score = true
 
console.log(typeof score)
let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33"     => 33
// "33abc"  => NaN (Not an Number)
// "true"   => 1;        "false" => 0

let isLoggedIn = 1

let valueInBool = Boolean(isLoggedIn)

console.log(valueInBool)
console.log(typeof valueInBool)

// 1        =>  true;      0 => false
// ""       =>  false
// "Majid"  => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)