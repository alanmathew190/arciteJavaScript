
//array destructuring
const numbers = [1, 2, 3, 4]
const [first, second, third] = numbers;

console.log(first)
console.log(third)

//object destructuring

const person = {
    name: "Alice",
    age:23
}
console.log(person.name)
console.log(person.age)

//destructuring way
const { name, age } = person;
console.log(name)
console.log(age)
console.log(person)

//spread

const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 0];
const c = [...a, ...b]
console.log(c)

const person2 = {
    name: "alan"
}
const person3 = {
    age:21
}
const person2a = {
    ...person2,
    age:21
}
const person2b = {
    ...person2,
    ...person3
}
console.log(person2a)
console.log(person2b)


//rest
const [first2, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(first2)
console.log(rest)

const {a1, ...rest2 } = {
    a1: "Welcome",
    b1: "hi",
    c1:"there"
}
console.log(a1)
console.log(rest2)


const x = Number("hsuh123")
console.log(x)

const x1 = Number("123")
console.log(x1)

const x2 = parseInt("421pdx")
console.log(x2)

const x3 = parseInt("  4 3")
console.log(x3)
