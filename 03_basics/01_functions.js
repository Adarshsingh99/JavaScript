// function addTwoNumber(number1 ,number2)
// {
//     console.log(number1+number2);
// }
// function addTwoNumber1(number1 ,number2)
// {
//     return number1+number2;
// }
// addTwoNumber(3,4)
// const result = addTwoNumber(3,5);
// console.log("result :",result) // undefined beacuse function does not return anything

// const result1 = addTwoNumber1(3,5);
// console.log("result :",result1) // return 8..

// // interview
// function loginUser(username)
// {
//     return `user ${username} just logged in`
// }
//  const user = loginUser("adarsh")
//  console.log(user)

//  // what if no argument is passed then
//   const user = loginUser()
//    console.log(user)  // user undefined just logged in  

   // rest operator 
   function calculateCartPrice(...num1)
   {
    return num1
   }
   console.log(calculateCartPrice(200,300,400,600)) // [ 200, 300, 400, 600 ]

   const user = {
      username : "hitesh",
      price : 199
   }
   function handleObject(anyobject)
   {
    console.log(`username is ${anyobject.username} and price is${anyobject.price}`)
   }


   // handle object through functions
//    handleObject(user)

   // you can also direct pass object
   handleObject({
    username : "adarsh",
    price : 99
   })
// you can also pass array 
const arr = [200,300,400,500]

function returnSecondValue(getArray)
{
    console.log(getArray); // return whole array
    console.log(getArray[1]); // return any single index value
}
console.log(returnSecondValue(arr));
