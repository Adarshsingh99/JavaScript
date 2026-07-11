const date = new Date()  // type - Object
console.log(date)
console.log(date.toString())
console.log(date.toISOString())
// also create any specific date
const date = new Date(2003,0,4) 
console.log(date)

console.log(date.getTime()) // get time in milli second
// how to convert in second
console.log(Math.floor(Date.now()/1000))

const newDate = new Date()
//most used- apko kya chahiye yaha pe aap define kr sakte hai
newDate.toLocaleString(
    'defailt',{
        weekday:"long",
    
    }
)
console.log(newDate)
