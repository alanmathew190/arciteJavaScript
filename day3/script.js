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


function factorial(n5) {
        let fact = 1;
    for(i2=1; i2<=n5; i2++) {
        fact *= i2;
    }
    console.log(fact)
}
factorial(10);

// Arrays
let fruits = ["Apple", "Orange", "Grapes","Pineapple"];
console.log(fruits);

console.log(fruits[2])

fruits[2] = "Kiwi";
console.log(fruits)

x = fruits.length;
console.log(x)

console.log(fruits[x - 1])

for (i = 0; i <= x-1; i++){
    console.log(fruits[i])
}

fruits.push("Strawberry")
console.log(fruits)

fruits.pop()
console.log(fruits);

fruits.shift()
console.log(fruits);

fruits.unshift("Apple");
console.log(fruits);

console.log(fruits.length)

console.log(fruits.indexOf("Kiwi"))

console.log(fruits.includes("Cherry"));

// deletefrombetween
fruits.splice(1, 1)
console.log(fruits)

// addtobetween
fruits.splice(2,0,"Mango")  
console.log(fruits)

// deleteandaddbetween
fruits.splice(1, 1, "Cherry","Guava");
console.log(fruits);

// extract elements
console.log(fruits.slice(1, 3))

console.log(fruits.sort());

console.log(fruits.reverse())