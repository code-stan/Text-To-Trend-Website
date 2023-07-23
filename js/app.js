// CALLING ALL DOM ELEMENTS
const menu = document.querySelector(".menu");
const menuIcons = document.querySelectorAll(".icon");
const menuContent = document.querySelector(".menu-container");
const menuEffect = document.querySelector(".menu-effect");
const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");
const loader = document.querySelector(".loader-loader")
const body = document.body;

// ONLOAD
function unvail(){
    body.classList.remove("loading");
    loader.classList.add("loaded")

}
window.addEventListener("load", ()=>{
    setTimeout(unvail, 2700)
})

menu.addEventListener("click", ()=>{
    menuIcons.forEach((icon)=>{
        icon.classList.toggle("open")
    })
    menuContent.classList.toggle("open");
    menuEffect.classList.toggle("open");
    body.classList.toggle("open");
    navbar.classList.toggle("onmenu")

})
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 80){
        logo.classList.add("onmove")
        navbar.classList.add("onmove")
        menu.classList.add("onmove")
    }
    else{
        navbar.classList.remove("onmove")
        logo.classList.remove("onmove")
        menu.classList.remove("onmove")

    }
})
