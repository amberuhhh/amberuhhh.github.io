//HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// //Hover over card, get effect
// let card = document.querySelector('.item-card');
      
// function changeB() {
//   card.style.border = 'solid black(1em)';
// }
// function changeBBack() {
//   card.style.border = '';
// }

// card.addEventListener('mouseover', changeB);
// card.addEventListener('mouseout', changeBBack);