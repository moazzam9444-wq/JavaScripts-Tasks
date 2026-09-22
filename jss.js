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
  

        // Task2.1



let menu = [
    {
    name: "Mansaf",
    price: 4.5,
    category: "Healthy",
    available: true
    }
    ,
    {
    name: "Mandi",
    price: 3.5,
    category: "Healthy",
    available: true
    }
    ,
    {
        name: "Burger",
        price: 3.5,
        category: "Fast Food",
        available: false
    }
    ,
    {
        name: "Shawarma",
        price: 2.5,
        category: "Fast Food",
        available: true
    }
    ,
    {   name: "Zinger",
        price: 2.75,
        category: "Fast Food",
        available: false
    }
]
console.log(menu[0].price)

 function showMenu() {
    for(let i=0;i<menu.length;i++){
        console.log(menu[i])
    }
 }
 showMenu()
 let found = true
 while(found){

  let  FoodName= prompt("Enter Your Food Name")
  for(let i=0;i<menu.length;i++){
    if(menu[i].name ===  FoodName){
        if(menu[i].available === false){
        continue;
        }
        found=false;
        for (let key in menu[i]) {
            
            console.log(key)
            
        }
        document.write(`<h2>Final Order </h2> 
            <p>Food: ${menu[i].name}</p>
            <p>Price: ${menu[i].price}</p>
            <p>Category: ${menu[i].category}</p>`)
        break;
     }
  }
 }
                            // Task Reverse       
function reverse(arr){
    let arr2 = []
    for (let i = arr.length-1; i >= 0 ; i--) {
        arr2.push(arr[i])
    }
    console.log(arr2)
}
 reverse([5,9,4,7,2,6])

                          //Task Even Or Odd
 for(i=0;i<=15;i++){
    if(i%2===0){
        console.log(`${i} Is Even`)
    }
    else {
         console.log(`${i} Is Odd`)
    }
 }
 
 function Dashes ()
 {
    let string =""
    let theNumber = prompt("Please Enter The Number")

    for(i=0;i<=theNumber.length-1;i++){
        string+=theNumber[i]
         if(Number(theNumber[i])%2==0 && Number(theNumber[i+1])%2==0){           //025468   //string ="0-2"
            string+="-"
        }
    }
    console.log(string)
}
 
 Dashes();





                            // Task  Agechecker
 function  Agechecker (){
    let userAge=prompt("Pls Enter Your Age")
    if(userAge>=18){
        console.log("The user is Adult")
    }
    else{
        console.log("The user is Minor")
    }
 }
 Agechecker();