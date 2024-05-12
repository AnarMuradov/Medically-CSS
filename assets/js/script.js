const navbar = document.getElementById("navbar")
const btn=document.querySelector(".navbar-btn")
const list=document.querySelector(".nav-container ul")
btn.addEventListener("click", function myf(){
 navbar.classList.toggle("navbarcl")
    list.classList.toggle("ulcl")
} )


