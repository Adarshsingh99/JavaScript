console.log("2" > 1)  // true
console.log("02" > 1)  // true


// avoid this type of conversion
console.log(null >0) // false
console.log(null == 0)  // false
console.log(null >= 0) // true

/*
The Reason is that an equality check == and comparisions > < >= <= work differentlt.
Comparision convert null to a number, treating it as 0.
That' why null >= 0 is true and null > 0 is false

*/

//  avoid this type of conversion
console.log(undefined == 0) // false in every comparsion
console.log(undefined > 0)
console.log(undefined < 0)


console.log("2"==2) // only value check - true
console.log("2"===2) // check dataType - false