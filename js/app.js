// menu responsive:

var btnOpen = document.getElementById("btnMenuOpen"),
  btnClose = document.getElementById("btnMenuClose"),
  navResponsive = document.getElementById("nav");

// Close click:
btnClose.addEventListener("click", function () {
  navResponsive.classList.remove("nav-active");
  btnOpen.classList.remove("hide");
});

// Open click:
btnOpen.addEventListener("click", function () {
  navResponsive.classList.add("nav-active");
  btnOpen.classList.add("hide");
});

// Slider:

// Projects lider
let sliderInner = document.querySelector(".slider--inner");
let sliderImg = document.querySelectorAll(".slider--inner img");
let totalImg = sliderImg.length;
// console.log(totalImg);

let sliderInnerDesc = document.querySelector(".description-inner");

let time = 10000;
let time2;
let index = 0;

setInterval(function () {
  // Image
  let porcentage = index * -100;
  sliderInner.style.transform = `translateX(${porcentage}%)`;
  // Description
  let porcentage2 = index * -50;
  sliderInnerDesc.style.transform = `translateY(${porcentage2}vh)`;

  index++;

  if (index >= totalImg) {
    index = 0;
  }
}, time);

// Effect

const effect = document.querySelector(".effect");
const colors = ["#909090", "#c0b8b8", "#cdcdcd"];

const figure = () => {
  for (let i = 0; i <= 10; i++) {
    let figure = document.createElement("span");
    let select = Math.round(colors.length * Math.random());

    figure.style.background =
      colors[select > colors.length ? select - 1 : select];

    //position box
    figure.style.top = innerHeight * Math.random() + "px";
    figure.style.left = innerWidth * Math.random() + "px";

    effect.appendChild(figure);


    setInterval(() => {
        figure.style.top = innerHeight * Math.random() + "px";
    figure.style.left = innerWidth * Math.random() + "px";
    },7000);

  }
};

figure();
