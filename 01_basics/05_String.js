const name = "Adarsh"
const repoCount = 50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)


// other way to declare string -- here string is object
const gamename = new String("ad arsh")
console.log(gamename)
console.log(gamename[0])
console.log(gamename.toUpperCase()) // i can use multiple methods
console.log(gamename) // method does not change original value beacause it store in stack and it is primitive dataType
console.log(gamename.charAt(2))
console.log(gamename.indexOf('a'))

// methods 
console.log(gamename.replace('a','b'))

//String to array
console.log(gamename.split(''))