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
