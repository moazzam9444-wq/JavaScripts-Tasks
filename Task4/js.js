let form = document.getElementById("form")
let username = document.getElementById("name")
let password = document.getElementById("password")
let phone = document.getElementById("phone")
let order = document.getElementById("order")
let write = document.getElementById("write")
let printord=document.getElementById("ord")
let printuser=document.getElementById("user")
form.onsubmit=function(event){
    event.preventDefault();
    let nameValue=username.value
    let passValue=password.value
    let phoneValue=phone.value
    let orderValue=order.value
    let regnam = /^\S+$/
    let regpass=/^(?=.*\d).{8,}$/
    let regphone=/^07\d{8}$/
    let nametest=regnam.test(nameValue)
    let passtest=regpass.test(passValue)
    let phonetest=regphone.test(phoneValue)
    if(nametest && passtest && phonetest){
        write.innerHTML=`Welcome ${nameValue}`

    localStorage.setItem("order",orderValue)
    let item = localStorage.getItem("order")
    printord.innerHTML=`Saved Order Is: ${item}`
    

    sessionStorage.setItem("userName",username.value)
    let user = sessionStorage.getItem("userName")
    printuser.innerHTML=`Saved User Name Is: ${user}`
        
    }
    else{
    write.innerHTML = "Invalid Data"
    }
  

}


let savedOrder = localStorage.getItem("order")

if(savedOrder){
    printord.innerHTML = `Saved Order Is: ${savedOrder}`
}
let savedUser = sessionStorage.getItem("userName")

if(savedUser){
    printuser.innerHTML = `Saved User Name Is: ${savedUser}`
}