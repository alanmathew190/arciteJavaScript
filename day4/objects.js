// Objects

const person = {
    name:"Alan",
    age:21,
    place:"Kollam"
}

console.log(person);
console.log(person.name)
console.log(person.age)


person.name = "kasyap";
person.age = 10;
console.log(person)

person.email = "alanmathew190@gmail.com"
console.log(person)

delete person.email
console.log(person)

for (let key in person) {
    console.log(key,":", person[key])
}

const person2 = {
    name: "BoB",
    address: {
        city: "Delhi",
        zip:"10101"
    },
    age:21
}
console.log(person2)
console.log(person2.address.city)


const laptop = {
    Brand: "HP",
    RAM: "8GB",
    Price:45000
}

console.log(laptop)

laptop.RAM = "16GB"
console.log(laptop);

laptop.color = "silver"
console.log(laptop);

delete laptop.Price
console.log(laptop)

console.log(laptop["Brand"])

const book = {
    title: "jsbasics",
    author: "johndoe",
    year:2020
}

for (let key in book) {
    console.log(key,":",book[key])
}


let name = "Alice John";
console.log(name.charAt(5))

console.log(name.length);

let fname = "Alan"
let lname = "Mathew"
console.log(fname.concat(" ", lname))

console.log(name.toLowerCase())
console.log(name.toUpperCase())

console.log(name.slice(1, 3))

console.log(name.replace("John","Bob"))

let messy = "    clean me   "
console.log(messy.trim());

let colors = "red,blue,green";
console.log(colors.split(","))

const str = "hello";
for (let char of str) {
    console.log(char)
}

const words1 = "   Hello javascript World   ";

console.log(words1.trim());
console.log(words1.toLowerCase())
console.log(words1.replace("javascript", "JS"))
console.log(words1.split(" "))

// let len = words1.length;
// let splits=words1.split("")
// for (i = 0; i <= len; i++){
//     if (splits[i] == "l") {
//         count+=1;
//     }
//     console.log(count)
// }



const words2 = "Hello world";

let count = 0;
for (let char of words2) {

    if (char == "l") {
        count += 1
    }
}
console.log(count)

// 1
// 2
// 4
// 7
// 11
// 16

let sum = 1;
for (let i = 0; i <= 5; i++){

    sum += i;
    console.log(sum);
}


console.log(Math.round(4.5))
console.log(Math.floor(4.5))
console.log(Math.ceil(4.5))
console.log(Math.random())
console.log(Math.max(2, 5, 3))
console.log(Math.min(2, 5, 3));
console.log(Math.pow(2, 5));
console.log(Math.sqrt(9));
console.log(Math.abs(-49));

