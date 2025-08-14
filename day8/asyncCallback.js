function asyncCalculator(operation,a,b){
    setTimeout(() => {
        console.log(operation(a,b))
    },2000)
}
function add(a, b) {
    return a + b
}
function multiply(a, b) {
    return a * b;
}
console.log("start")
asyncCalculator(add, 4, 5);
console.log("End")
