let arr = [1, 2, 3, 4, 1, 2, 3, 7, 9];``
let duplicates = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            if (!duplicates.includes(arr[i])) {
                duplicates.push(arr[i])
            }
            
        }
    }
}
console.log(duplicates)