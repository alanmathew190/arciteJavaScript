function doMath(operation,a,b){
    return operation(a, b);
}

function add(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

console.log(doMath(add,2,4)) //function as arguments this is called higher order function