

var heightChecker = function (heights) {
    let hei=heights
    let count=0;
    let h = heights.sort()
    
    for (i = 0; i <= h.length; i++){
        if (h[i] != hei[i]) {
            count++
        }
    }
    return count
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));