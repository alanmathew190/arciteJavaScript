let arr = [45, 78, 4, 69, 12]

for (let i = 0; i < arr.length; i++){
    if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        i = -1;
    }
}
console.log(arr[arr.length - 1])

const a = [45, 70, 4, 69, 12];
const b = a.reduce(max)

function max(max, value) {
    if (value > max) {
        max=value
    }
    return max
}
console.log(b)