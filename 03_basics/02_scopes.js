// var c =300 // global scope 
// if(true)
// { // block scope
//     let a = 10
//     const b= 20
//     c= 30 // value got overwrite
// }

// console.log(c) 

// global scope :- ki value local me access ho sakti hai
// liken local scope ki value global me nhi

let a = 300
if(true)
{
    let a= 200
    console.log("Inner :",a)
}
console.log("outer",a)

//         Inner : 200
//         outer 300




// scope in nested function

function one(){
    const username = "adsrsh"
    function two()
    {
        const website ="youtube" // child can access global value
        console.log(username)
    }
    two()
}
one() 
// console.log(website)// this give error because parent can not access child value


// hoisting

console.log(addone(5)) // this is valid
function addone(num)
{
    return num+1
}

addtwo(5) // this will give error  because we access function before declaration
const addtwo = function (num){
    return num+2
}