
let menu = document.getElementById("menu");

fetch("menu.json")
.then(response => response.json())

.then(data => {
    
    for(let i = 0; i < data.length; i++){
    menu.innerHTML += `<p>Meal Name: ${data[i].mealName} <br> Price: ${data[i].Price} <br> Availability: ${data[i].Availability}</p>`;
    }
    localStorage.setItem("menu", JSON.stringify(data));
});


