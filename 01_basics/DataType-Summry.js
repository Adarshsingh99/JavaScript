// kis tarah se data ko memory me rakha jata hai acess kiya jata hai iske 2 types hai
// 1. primitive
/*
      7 types - String,Number,Boolean, null , Undefined,Symbol,BigInt
    
      const val1 = symbol('123')
      const val2 = symbol('123')

      val1===val2  // give false result

*/

// 2. non-primitive - Array, Objects, Function

const heros = ["ironman", "superman","thor"]
 console.log(typeof(heros))  // object

let obj = {
    name : "adarsh",
    age : 22,
}
console.log(typeof(obj)) // object

myfuction=function  (){

}
console.log(typeof(myfuction)) // object-function

// **********************************************************************************
/*
Stack (primitive) - uska copy milta hai
 Heap (non- primitive) - jo bhi change karenge wo original value me change hoga









*/