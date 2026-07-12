// singleton object
// const tinderUser = new Object()
// non singleTon
const tinderUser = {}

tinderUser.id = "1"
tinderUser.name = "sammy"
tinderUser.isLogged = false

// nesting in Object
const regularUser={
    email : "some@gmail.com",
    fullname :{
        userFullName : {
            firstName : "Adarsh",
            lastName : "singh"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName)

const obj1 = {1:"a",2:"b",3:"c"}
const obj2  = {4:"a",5:"b",6:"c"}

// const obj3 = {obj1,obj2} // object k andar object aa jayega

// const obj3 = Object.assign({},obj1,obj2) // all objects value in one object

//console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b', '6': 'c' }

// most used
// const obj3 = {...obj1,...obj2}
// console.log(obj3)

// methods
console.log(Object.keys(tinderUser)) // datatype is array
console.log(Object.values(tinderUser))