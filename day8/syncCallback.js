function doMath(operation, a, b) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

console.log("Start")
console.log(doMath(add, 5, 6))
console.log("End")