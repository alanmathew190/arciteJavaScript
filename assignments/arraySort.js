function arraySort(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            i = -1;
        }
        else
            continue;
    }
    console.log(arr);
}
arraySort([1,5,2,3,0,7])