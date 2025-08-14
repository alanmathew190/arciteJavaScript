let heading = document.createElement("h1");

function create() {
    heading.innerHTML="Hello JavaScript"
    document.body.appendChild(heading)
}

function remove() {
    document.body.removeChild(heading)
}

let heading1 = document.getElementById("demo")
let btn = document.getElementById("btn")

btn.addEventListener("click", changeBG);//change the second function for desired changes 

function changeColor() {
    heading1.style.color="red"
}

function changeBG() {
    heading1.style.backgroundColor = "green";
}