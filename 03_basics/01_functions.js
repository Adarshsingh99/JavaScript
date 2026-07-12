function addTwoNumber(number1 ,number2)
{
    console.log(number1+number2);
}
function addTwoNumber1(number1 ,number2)
{
    return number1+number2;
}
addTwoNumber(3,4)
const result = addTwoNumber(3,5);
console.log("result :",result) // undefined beacuse function does not return anything

const result1 = addTwoNumber1(3,5);
console.log("result :",result1) // return 8..

// interview
function loginUser(username)
{
    return `user ${username} just logged in`
}
 const user = loginUser("adarsh")
 console.log(user)

 // what if no argument is passed then
  const user = loginUser()
   console.log(user)  // user undefined just logged in  