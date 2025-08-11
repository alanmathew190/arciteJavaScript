function oddEvenCount(arr) {
    let len = arr.length;
    let countOdd = 0;
    let countEven = 0;
    for (let i = 0; i <= len - 1; i++) {
        if (arr[i] % 2 == 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
    console.log("Count of Odd number is " + countOdd)
    console.log("Count of Even number is " + countEven)
}

oddEvenCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
oddEvenCount([1, 3, 5, 7, 9])
oddEvenCount([2, 4, 6, 8, 10])

