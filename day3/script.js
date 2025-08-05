// FUNCTIONS

function sayHello1() {
    console.log("Hello");
}
sayHello1();
sayHello1();
sayHello1();

// parameters and arguments
function sayHello2(name1) {
  console.log("Hello ",name1);
}
sayHello2("Alan");

// multiple parameters and arguments
function sayHello3(name1, name2) {
  console.log("Hello " + name1+" and "+name2);
}
sayHello3("Alan", "Bob");

function sum(a, b) {
    console.log(a, b);
    console.log(a + b);
}

sum(10, 20);
sum(100, 200);

// return
function multiply(x,y) {
    return x * y;
}
let result=multiply(4,5);
console.log(result);

// default parameters

function sayName(name3="Guest") {
  console.log("Hello "+name3);
}
sayName();
sayName("Alan");

function areaRectangle(l, b) {
    console.log(l * b);
}

areaRectangle(2, 5);

function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumbers(10);

function sumOfN(n1) {
    let sum = 0;
    for(i=1; i<=n1; i++) {
        sum+=i;
    }
    console.log(sum);
}
sumOfN(10);

function oddeven(n) {
    for (i = 1; i <= n; i++){
        if (i % 2 == 0)
            console.log(i,"is Even number")
        else
            console.log(i,"is odd Number")
    }
}
oddeven(10);

function reversePrint(n4) {
    let i1 = n4;
    while(i1>=1){
        console.log(i1);
        i1--;
    }
}
reversePrint(10);


// function factorial() {
//         let fact = 0;
//     for(i=1; i<=n1; i++) {
//         sum+=i;
//     }
//     console.log(sum);
// }
// sumOfN(10);
// }