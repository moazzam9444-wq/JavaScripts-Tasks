let fontfam = document.getElementById("fonts-family")
let fotsize = document.getElementById("fonts-size")
let inputs = document.querySelectorAll("input")
let messages = document.getElementById("typing")

messages.addEventListener("click",function(){
    messages.style.fontFamily=fontfam.value
})
messages.onclick=function () {
    messages.style.fontSize=fotsize.value
}
 inputs[0].onchange= function(){
    messages.style.fontStyle= "italic"
 }
inputs[1].onchange= function(){
    messages.style.fontWeight= "bold"
 }
 inputs[2].onchange= function(){
    messages.style.textDecoration= "underline"
 }
