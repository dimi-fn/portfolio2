// <button class="hamburger" id="hamburger">
const hamburgerButton = document.getElementById("hamburger") 

const navList = document.getElementById("nav-list") // <ul id="nav-list">

function toggleButton(){
    navList.classList.toggle("show")
}

// when you click the hamburger button, toggle it by revoking the toggleButton function above
hamburgerButton.addEventListener("click", toggleButton)
