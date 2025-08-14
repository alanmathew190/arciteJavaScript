
// template literals``

let text1 = "Welcome home" //normal

let text2 = `Welcome "Home"`
console.log(text1)
console.log(text2)


//allows multiline strings
let text3 = `the brown
fox jump over 
the fence`
console.log(text3)

//interpolation

let firstName = "John"
let lastName = "Doe"

console.log(`Welcome ${firstName} ${lastName}`);