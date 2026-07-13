// const coding = ["js","java","ruby"]

// const values = coding.forEach(function(val)
// {
//     console.log(val)
//     return val;
// })

// console.log(values) // undefined :- for each koi value return nhi karta hai

/****************************************************************************************************************/

const myNums = [1,2,3,4,5,6,7]
const newNums = myNums.filter((num)=>{
    return num>4  // agar {} hai to return keyword likhna must hai 
}) 
console.log(newNums)

