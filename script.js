// VARIABLES
let burger = document.querySelector(".burger");
let buns = document.querySelector(".buns");
let nav = document.querySelector("nav");
let arrowMenu = document.querySelector(".pijl");
let ul = document.querySelector("ul");
let arrow = document.querySelector(".arrow");
let menuOptions = document.querySelectorAll("li");
let span = document.querySelector("span");
let images = document.querySelectorAll(".container img");
let video = document.querySelector(".container video");
let infoImages = document.querySelectorAll(".container p");
let articleLinks = document.querySelectorAll("header nav a");
let lamp = document.querySelector(".lamp");
let body = document.querySelector("body");
let toTop = document.querySelector(".totop");





// ASSIGNMENTS
burger.addEventListener("click", showNav);
arrowMenu.addEventListener("click", showMenu);
lamp.addEventListener("click", toggleLightAndDark);
for (let i = 0; i < menuOptions.length; i++) {
  menuOptions[i].addEventListener("click", makeChoice);
}
for (let i = 0; i < articleLinks.length; i++) {
  articleLinks[i].addEventListener("click", hideNav);
}
window.addEventListener("scroll", arrowToTop);





// FUNCTIONS
function showNav() {
  if (nav.classList.contains("invisible") === true) {
    nav.classList.remove("invisible");
  } else {
    nav.classList.add("invisible");
  }
}

function hideNav() {
  nav.classList.add("invisible");
}

function showMenu() {
  if (ul.classList.contains("invisible") === true) {
    ul.classList.remove("invisible");
    arrow.style.animation = "turnDown .1s forwards";
  } else {
    ul.classList.add("invisible");
    arrow.style.animation = "turnUp .1s forwards";
  }
}

function makeChoice() {
  for (let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].classList.remove("selected");
  }
  this.classList.add("selected");
  span.innerHTML = this.innerHTML;
  ul.classList.add("invisible");
  arrow.style.animation = "turnUp .1s forwards";
  for (let i = 0; i < images.length; i++) {
    if (images[i].className !== this.getAttribute("data-software")) {
      images[i].style.animation = "hide 1s forwards";
      infoImages[i].style.animation = "hideText 1s forwards";
    } else {
      images[i].style.animation = "show 1s forwards";
      infoImages[i].style.animation = "showText 1s forwards";
    }
  }
  if (video.className !== this.getAttribute("data-software")) {
    video.style.animation = "hide 1s forwards";
    infoImages[17].style.animation = "hideText 1s forwards";
  } else {
    video.style.animation = "show 1s forwards";
    infoImages[17].style.animation = "showText 1s forwards";
  }
  if (this.getAttribute("data-software") === "alle") {
    video.style.animation = "show 1s forwards";
    infoImages[17].style.animation = "showText 1s forwards";
    for (let i = 0; i < images.length; i++) {
      images[i].style.animation = "show 1s forwards";
      infoImages[i].style.animation = "showText 1s forwards";
    }
  }
}

function toggleLightAndDark() {
  body.classList.toggle("light");
  if (body.classList.contains("light") === true) {
    lamp.style.backgroundImage = "url(afbeeldingen/lamp-aan.svg)";
  } else {
    lamp.style.backgroundImage = "url(afbeeldingen/lamp-uit.svg)";
  }
}

function arrowToTop() {
 if (window.pageYOffset > 200) {
   nav.classList.add("invisible");
   toTop.classList.remove("invisible");
 } else {
   toTop.classList.add("invisible");
 }
}
