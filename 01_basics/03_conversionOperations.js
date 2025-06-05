let score = true
 
// console.log(typeof score)
let valueInNumber = Number(score)

// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33"     => 33
// "33abc"  => NaN (Not an Number)
// "true"   => 1;        "false" => 0

let isLoggedIn = 1

let valueInBool = Boolean(isLoggedIn)

// console.log(valueInBool)
// console.log(typeof valueInBool)

// 1        =>  true;      0 => false
// ""       =>  false
// "Majid"  => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)

//      ----- Some Operations Here -----

let str1 = "Hello"
let str2 = " Majid"

let str3 = str1 + str2

// console.log(str3)

// if string is first then it will be added string and no operations will be performed
// console.log("2" + 2 + 2)

// if there are operations first then it will be performed first it will be converted to string
// console.log(2 + 2 + "2")

// Avoid writing code like below, it ruins the readability

console.log(+true)
console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2 + 2