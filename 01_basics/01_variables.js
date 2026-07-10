const accountId= 144553
let accountEmail = "adarsh@123"
var accountPassword = "12345"

let variable;  // give undefine

/*
  prefer not to use var 
  Beacause of issue in block scope and function scope
*/

// acoountId = 1
accountEmail = "a@as.com"
accountPassword = "1211122"

console.table([accountId,accountEmail,accountPassword,variable])
// ┌─────────┬────────────┐
// │ (index) │ Values     │
// ├─────────┼────────────┤
// │ 0       │ 144553     │
// │ 1       │ 'a@as.com' │
// │ 2       │ '1211122'  │
// │ 3       │ undefined  │
// └─────────┴────────────┘