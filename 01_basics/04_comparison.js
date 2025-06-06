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