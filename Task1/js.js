let name = prompt("Enter Your Name")
let age = prompt("Ente Your Age")
let gender = prompt("Enter Your Gender:\nMale\nFemale")
let order = ""
if(gender === "male" || gender === "Male")
{
    window.alert(" Welcome Mr." + name)
} 
else if (gender === "female" || gender === "Female"){
        window.alert("Welcome Ms."+name)
    }
else{
        window.alert("Welcome "+name)
}

if(age < 16){
    window.alert("You are not eligible to place an order")
}
else {

    order = prompt("Choose Your Order:\nBurger\nShawarma\nZinger")

    let validOrder = order === "Burger" || order === "Shawarma" || order === "Zinger"

    if (validOrder) {

        window.alert("Your order is being prepared")

    }
    else {

        window.alert("Invalid order. Please try again")

    }

    if (age >= 18 && validOrder) {

        window.alert("Order confirmed")

    }
    else if (age < 18 || !validOrder) {

        window.alert("Order requires verification")

    }

}

console.log("Name "+ name)
console.log("Age "+ age)
console.log("Gender "+gender)
console.log("Order "+order)
document.write("<h1>Welcome To Mohammad Resturant</h1>")
document.write("<p>Name " + name +"</p>")
document.write("<p>Age " + age +"</p>")
document.write("<p>Gender " + gender +"</p>")
document.write("<p>Order " + order +"</p>")