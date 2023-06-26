// CALLING ALL DOM ELEMENTS
const menu = document.querySelector(".menu");
const menuIcons = document.querySelectorAll(".icon");
const menuContent = document.querySelector(".menu-container");
const menuEffect = document.querySelector(".menu-effect");
const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");
const body = document.body;

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
    if(window.scrollY > 50){
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
// NEW MOUSE
// window.addEventListener("mousemove", (e)=>{
//     const newMouse = document.querySelector(".mouse-icon");
//     const getX = e.pageX;
//     const getY = e.pageY;
//     const overallX = Math.ceil((getX / window.innerWidth) * 100)
//     const overallY = Math.ceil((getY / window.innerHeight) * 100)
//     console.log(overallX, overallY)
//     newMouse.style.top = `${overallY}%`
//     // console.log(newMouse.style.top = `${overallY}%`)
//     newMouse.style.left = `${overallX}%`
// })