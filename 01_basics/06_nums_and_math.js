// /************************************** Maths********************************************************************/

console.log(Math) // object which has many function

console.log(Math.abs(-6)) // negative become positive
console.log(Math.round(4.76776)) // 5
console.log(Math.ceil(4.3))
console.log(Math.floor(4.9))
console.log(Math.max(1,2,3,4))
console.log(Math.max(4,3,4,2))

console.log(Math.random()) // most used - in this value always come in 0 to 1 
console.log(Math.random()*10+1)
console.log(Math.round(Math.random()*1000 + 1))

// agar mujhe ek range me random number chahiye tab
const min = 10
const max = 20
//formula 
console.log(Math.floor(Math.random()*(max-min+1))+min)