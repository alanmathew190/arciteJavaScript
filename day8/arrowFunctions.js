
//normal function
function add(a, b) {
    return a + b;
}
console.log(add(2, 4));


//arrow function
const arrowAdd = (a, b) => a + b;
console.log(arrowAdd(3, 4))


//one parameter no paranthesis () needed
const square = x => x * x;
console.log(square(5))

// no parameter paranthesis () needed
const greet = () =>console.log("Hello");
greet()