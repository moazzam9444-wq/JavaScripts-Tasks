let input = document.getElementById("input")
let button = document.querySelector(".button")
let textField = document.getElementById("textField")

let arr = JSON.parse(localStorage.getItem("arr")) || []

button.addEventListener("click", function(){

    let inputValue = input.value

    arr.push(inputValue)

    localStorage.setItem("arr", JSON.stringify(arr))

    input.value = ""

    showTasks()
})

function showTasks(){

    textField.innerHTML = ""

    for(let i = 0; i < arr.length; i++){

        textField.innerHTML += `
        <span>
            ${arr[i]}
            <button class="dlbtn" data-index="${i}">Delete</button>
            <br><br>
        </span>
        `
    }

    let deleteBtn = document.getElementsByClassName("dlbtn")

    for(let i = 0; i < deleteBtn.length; i++){

        deleteBtn[i].onclick = function(){

            let index = this.dataset.index

            arr.splice(index, 1)

            localStorage.setItem("arr", JSON.stringify(arr))

            showTasks()
        }
    }
}
showTasks();