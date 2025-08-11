let arr = [2, 1, 4, 5, 3];
let len=arr.length;
for (let i = 0; i <=len-1; i++) { 
    if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        i=-1;
    }
    
}
console.log(arr)
console.log("Second largest number is "+arr[len-2])