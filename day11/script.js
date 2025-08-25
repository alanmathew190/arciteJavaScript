let jaggedArray = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
]

console.log(jaggedArray[2])

let greet = function () {
    console.log("Hello")
}

greet();


let otp=function generateOtp() {
    return Math.floor(Math.random() * 900000) + 100000
}



function add(a, b) {
    return a + b;
}
function sub(a,b) {
    return a-b
}



module.exports = { add, sub, otp }
