/*

let score = "33abc"
console.log(typeof score) // string
console.log(typeof(score)) // string

let valueInNumber = Number(score)  // string cannot convert into number so its say Nan
console.log(typeof(valueInNumber)) //number
console.log(valueInNumber) //NaN

let score = null
console.log(typeof score) // object
console.log(typeof(score)) // object

let valueInNumber = Number(score)
console.log(typeof(valueInNumber)) //number
console.log(valueInNumber) // 0

let score1 = "123"
console.log(Number(score1)) // this can convert into number so its does not say Nan


/*
true - 1
false - 0

*/

let isLogged = 1
let isLogged1 = 0

let isLogged2= ""
let isLogged3 = "askjs"

console.log(Boolean(isLogged))  // true
console.log(Boolean(isLogged1)) // false
console.log(typeof String(isLogged))  // string
console.log( typeof String(isLogged1)) // string
console.log(Boolean(isLogged2)) // false
console.log(Boolean(isLogged3)) // true