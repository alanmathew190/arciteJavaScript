// if

let a = 17;

if (a < 18) {
    console.log("you are not eligible to vote")
}

// if else
let b = 18;

if (b >= 18) {
    console.log("you are eligible to vote")
}
else {
    console.log("you are not eligible to vote")
}

// if...else if...else

let c = 18;

if (c > 18) {
    console.log("you are an adult")
}
else if (c < 18) {
    console.log("you are not an adult")
}
else {
    console.log("you are perfect")
}

// switch
let today = "tuesday";

switch (today) {
    case "monday":
        console.log("today is monday")
        break;
    case "tuesday":
        console.log("today is tuesday")
        break;
    case "wednesday":
        console.log("today is wednesday")
        break;
    case "thursday":
        console.log("today is thursday")
        break;
    case "friday":
        console.log("today is friday")
        break;
    case "saturday":
        console.log("today is saturday")
        break;
    case "sunday":
        console.log("today is sunday")
        break;
    default:
        console.log("invalid day")
}

// ternary operators
let age = 18;

let result = (age >= 18) ? "eligible" : "not eligible"
console.log(result)


// odd or even
let num = 8;

if (num % 2 === 0)
    console.log("even")
else
    console.log("odd")


// negative or positive

let num1 = 4;

if (num1 >= 0)
    console.log("positive")
else if (num1 < 0)
    console.log("negative")
else
    console.log("Zero")

// cold warm
let deg = 10;

if (deg <= 0)
    console.log("freezing")
else if (deg > 0 && deg <= 15)
    console.log("cold")
else if (deg > 15 && deg <= 25)
    console.log("warm")
else
    console.log("hot")

// loops
// for loop
for (i = 1; i <= 10; i++)
console.log(i);

let sum = 0;
for (i = 1; i <= 10; i++)
    // sum += i;
    console.log(sum += i)
    

for (i = 1; i <= 10; i++){
    if(i%2===0)
    console.log("even number "+i)
    else
    console.log("odd number "+i)
}

// while

let i1 = 1;
while (i1 <= 10) {
    console.log(i1)
    i1++;
} 

let i2 = 10;
while (i2 >= 1) {
    console.log(i2)
    i2--;
}
console.log("-------------------------------")
let i3 = 1;
while (i3 <= 30) {
    if(i3 % 3 === 0)
    console.log(i3)
    i3++;
}
console.log("do while-------------------------------");
// do while 
let i4 = 11;
do {
    console.log(i4)
    i4++;
} while (i4 <= 10);


// break 
console.log("break-------------------------------");
for (i5 = 0; i5 <= 10; i5++)
    if(i5===3)
    break;
console.log(i5)
    
// continue
console.log("continue-------------------------------");
for (i6 = 0; i6 <= 10; i6++) {
    if (i6 === 3)
        continue;
    console.log(i6)
}