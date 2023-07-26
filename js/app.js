// Effec vars
const effect = document.querySelector(".effect");
let colors = ["#909090", "#c0b8b8", "#cdcdcd"];
let darkColors = ["red", "green", "gray"];

/////////////// menu responsive:

let btnOpen = document.getElementById("btnMenuOpen"),
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

/////////////// Slider:

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

//////////////// Dark/Light mode:

const sw = document.querySelector(".switch");
const btnDark = document.querySelector(".btn-dark");
const btnLight = document.querySelector(".btn-light");

let darkMode = false;
console.log(darkMode);

sw.addEventListener("click", (darkMode) => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkMode = true;
    console.log(darkMode);

    btnDark.classList.add("fa-solid");
    btnDark.classList.add("fa-toggle-on");

    btnLight.classList.remove("fa-solid");
    btnLight.classList.remove("fa-toggle-off");
    btnLight.classList.add("disappear");
  } else {
    darkMode = false;
    console.log(darkMode);

    btnDark.classList.remove("fa-solid");
    btnDark.classList.remove("fa-toggle-on");

    btnLight.classList.add("fa-solid");
    btnLight.classList.add("fa-toggle-off");
  }
});

// Effect
const figure = (colors, darkColors) => {
  for (let i = 0; i <= 10; i++) {
    let figure = document.createElement("span");
    let select = Math.round(colors.length * Math.random());
    // let select2 = Math.round(darkColors.length * Math.random());

    // if(document.body.classList.contains('dark')){
    //   figure.style.background =
    //   darkColors[select2 > darkColors.length ? select2 - 1 : select2];
    // }else{
    figure.style.background =
      colors[select > colors.length ? select - 1 : select];
    // }

    //position box
    figure.style.top = innerHeight * Math.random() + "px";
    figure.style.left = innerWidth * Math.random() + "px";

    effect.appendChild(figure);

    setInterval(() => {
      figure.style.top = innerHeight * Math.random() + "px";
      figure.style.left = innerWidth * Math.random() + "px";
    }, 7000);
  }
};
figure(colors, darkColors);
