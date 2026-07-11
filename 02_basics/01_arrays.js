//js array : resizable and can store different dataType values
const arr = [0,1,2,3,4,5]
// console.log(arr) //[ 1, 2, 3, 4, 5, 6 ]
// arr.push(10)
// console.log(arr)
// arr.pop()
// console.log(arr)
//  arr.unshift(9)
// console.log(arr)
// arr.shift()
// console.log(arr)

// slice and splice
console.log("A",arr) //     A [ 0, 1, 2, 3, 4, 5 ]
const arr1 = arr.slice(1,3)
console.log(arr1)  //       [ 1, 2 ]
console.log("B",arr) //     B [ 0, 1, 2, 3, 4, 5 ]
const arr2 = arr.splice(1,3)
console.log("C",arr) //     C [ 0, 4, 5 ]
console.log(arr2) //        [ 1, 2, 3 ]