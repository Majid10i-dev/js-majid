const name = "Majid"
const repoCount = 50

console.log(`Hello my name is is ${name} and my repo is ${repoCount}`)

const gameName = new String('M-Maj')
console.log(gameName[1])

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.substring(0, 3))
console.log(gameName.substring(-3, 4))

const newStringOne = "    Majid   "
console.log(newStringOne.trim())

console.log(gameName.split("-"))

console.log(gameName.lastIndexOf("M"))

console.log(gameName.includes("Mj"))

console.log(gameName.replaceAll("M", "S"))