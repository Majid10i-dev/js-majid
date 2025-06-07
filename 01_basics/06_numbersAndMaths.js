const score = 400
console.log(score)

const balance = new Number(234.46)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(1))
console.log(balance.toPrecision(4))

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"))


//  ***************** Maths ******************

let newNum = 5.6
// console.log(Math)
// console.log(Math.pow(newNum, 2))
// console.log(Math.abs(-4))
// console.log(Math.round(6.1))
// console.log(Math.ceil(4.3))
// console.log(Math.floor(4.3))
// console.log(Math.min(2, 3, 1, 3, 4))
// console.log(Math.max(2, 3, 1, 3, 4))

console.log(Math.random()*10+1)
console.log(Math.floor(Math.random()*10+1))

let max = 20
let min = 10
console.log(Math.floor(Math.random()*(max-min+1))+min)