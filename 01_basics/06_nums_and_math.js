const score = 400

const balance = new Number("100") // this is always 100% number
console.log(balance)  // [Number: 100]

console.log(balance.toFixed(2)) //100.00
console.log(balance.toString()) // string 
console.log(balance.toString().length) //3
console.log(balance.length) // this is object so it give undefine

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4)) //123.9

const hundres = 1000000
console.log(hundres.toLocaleString('en-In')) //10,00,000

