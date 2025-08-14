//global scope

//function scope

//block scope


function outer(){
    let count = 0;

    function inner() {
        count++;
        console.log(count)
    }
    return inner;
}

const counter = outer();
counter();
counter();