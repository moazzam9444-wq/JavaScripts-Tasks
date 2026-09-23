let click = document.getElementById("btn1");

let namee = document.getElementsByClassName("name")[0];

let orderr = document.querySelector("#order");

let result = document.getElementById("result");

function onclick (){
    
    result.innerHTML = `Hello ${namee.value}! Your Order is ${orderr.value}.`;
}
click.onclick = onclick;

function mosuseOver(){
    click.style.backgroundColor="rgb(84, 167, 219)";
}
click.onmouseover = mosuseOver;

function mouseOut(){
    click.style.background="rgb(0, 0, 0) ";
}
click.onmouseout = mouseOut;