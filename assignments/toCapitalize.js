function toCapitalize(str) {
    const arr = str.split(" ");
    const arr1 = arr.map(word => word[0].toUpperCase() + word.slice(1));
    return arr1.join(" ")
}
console.log(toCapitalize("hello world"))

