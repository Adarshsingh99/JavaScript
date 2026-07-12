// this loop are array specific


//    #for of

// const arr = [1,2,3,4]
// for (const num of arr)
// {
//     console.log(num)
// }

// const greetings = "hello world!"
// for ( const greet of greetings)
// {
//     if (greet== " ") continue
//     console.log(greet)
// }

// #maps

const map = new Map() // store value in order and unique
map.set('In','India')
map.set('usa','unites State of america')
// console.log(map)
  // kya mai isme loop laga skta hu
  for(const [key,val] of map)
  {
    // console.log(key,val)
  }
   // kya object me for of loop laga sakta hu
   const myObject = {
    'game1':"NFS",
    'game2':"spiderman"
   }
   for (const [key,val]of myObject)
   {
    console.log(key,val)
   }
   // * object are not  iterable


   