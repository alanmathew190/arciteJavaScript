var a = document.getElementById("demo")

console.log(a.textContent)


function changeContent() {
    a.innerHTML = "Learn JS"
}
function changeColor() {
  a.style.color = "Red";
}
function changeSize() {
    a.style.fontSize="40px"
}


var b= document.getElementsByClassName("demo1")
console.log(b)

function changeContent1() {
  b[0].innerHTML = "Learn JS";
}
function changeColor2() {
    b[0].style.color = "Red";
    b[1].style.color = "blue";
}
function changeSize3() {
  b[0].style.fontSize = "20px";
  b[1].style.fontSize = "40px";
}

var c = document.getElementsByTagName("p");
var d = document.getElementsByTagName("h1");

console.log(c)
console.log(d)

var e = document.getElementsByName("text")[0];
var f= document.getElementById("demo3")
console.log(e)

function message() {
    f.innerHTML ="Hello "+ e.value;
}

var f=document.querySelectorAll("h2")
console.log(f)

f[0].innerHTML = "Learn ".concat(f[0].innerHTML)+"Script"
// f[1].style.color = "blue"
// f[2].style.color = "green"

var g=document.querySelectorAll(".demo5")
console.log(g)
g[0].style.color = "blue"


var h=document.querySelector("#demo4")
console.log(h)
h.style.color = "red"

// function add() {
//   console.log("add")
//   sub();
// }
// function sub() {
//   console.log("sub")
//   add();
// }


