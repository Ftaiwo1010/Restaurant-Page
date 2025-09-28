import "./styles/style.css";
import { home } from "./modules/home.js";
import { menu } from "./modules/menu.js";
import { contact } from "./modules/contact.js";

const nav = document.querySelector("nav > ul");
const content = document.querySelector("#content");

window.addEventListener("DOMContentLoaded", () => {
   menu();
});

// handle hamburger click
const hamburger = document.querySelector(".bar");
hamburger.addEventListener("click", () => {
  const bar =  document.querySelector(".bar > i");
  const nav =   document.querySelector("nav");
  nav.classList.toggle("active");
  if (nav.classList.contains('active')) {
     bar.className = "fa-solid fa-xmark";
  } else {
    bar.className = "fa-solid fa-bars-staggered";
  }
});



// Handle nav links click
nav.addEventListener("click", (e) => {
   const target = e.target;
   switch (target.textContent) {
    case "Home":
      content.innerHTML = "";
      home();
      break;
    case "Menu":
      content.innerHTML = "";
      menu();
      break
    case "Contact":
      content.innerHTML = "";
      contact();
      break
   }
});


// remove nav from the screen when a link is clicked
nav.addEventListener("click", (e) => {
   const bar =  document.querySelector(".bar > i");
   const target = e.target.textContent;
   
   if (target === "Home" || target === "Menu" || target === "Contact") {
      const myNav = document.querySelector("nav");
      myNav.classList.toggle("active")
      bar.className = "fa-solid fa-bars-staggered";
   }
});





