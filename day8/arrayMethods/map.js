const numbers = [10, 20, 30, 40, 50]
const newArray = numbers.map(n => n * 10) //map with arrow function

console.log(newArray)


const newArray2 = numbers.map(square) //map with external function

function square(a) {
   return a*a;
}
console.log(newArray2)