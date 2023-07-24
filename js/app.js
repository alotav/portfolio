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

// Projects lider
let sliderInner = document.querySelector(".slider--inner");
let sliderImg = document.querySelectorAll(".slider--inner img");
let totalImg = sliderImg.length;
// console.log(totalImg);

let sliderInnerDesc = document.querySelector(".description-inner");


let time = 3000;
let time2;
let index = 0;

setInterval(function(){
    // Image
    let porcentage = index * -100;
    sliderInner.style.transform = `translateX(${porcentage}%)`;
    // Description
    let porcentage2 = index  * -50;
    sliderInnerDesc.style.transform = `translateY(${porcentage2}vh)`;


    index ++;

    if(index >= totalImg){
        index = 0;
    }
}, time);
