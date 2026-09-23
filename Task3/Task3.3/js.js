 let circle = document.getElementById("btn-1")
    let square = document.getElementById("btn-2")
    let pic = document.getElementsByTagName("img")[0]
    circle.onclick=function(){
        pic.style.borderRadius="50%"
    }
    square.onclick=function(){
        pic.style.borderRadius="0"
    }
