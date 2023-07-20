// menu responsive:

var btnOpen = document.getElementById("btnMenuOpen"),
    btnClose = document.getElementById("btnMenuClose"),
    navResponsive = document.getElementById("nav");

// Close click:
btnClose.addEventListener("click", function(){
    navResponsive.classList.remove("nav-active");
    btnOpen.classList.remove("hide");
})

// Open click:
btnOpen.addEventListener("click", function(){
    navResponsive.classList.add("nav-active");
    btnOpen.classList.add("hide");
})

// Slider:



let sliderInner = document.querySelector(".slider--inner");
let sliderImg = document.querySelectorAll(".slider--inner img");
let totalImg = sliderImg.length;
console.log(totalImg);
let index = 0;

setInterval(function(){
    let porcentage = index * -100;

    sliderInner.style.transform = `translate(${porcentage}%)`;

    index ++;

    if(index >= totalImg){
        index = 0;
    }

}, 3000);