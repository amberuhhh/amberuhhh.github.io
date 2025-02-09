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




// //Canvas drawing
// let canvas = document.querySelector('.canvas');
// let context = canvas.getContext('2d');

// var ctx = canvas.getContext("2d");
// // Function to draw a star with 'n' sides
// function drawStar(x, y, radius, sides, fillColor) {
//   var points = sides || 5;
//   ctx.fillStyle = fillColor;
//   ctx.beginPath();
//   ctx.moveTo(x, y + radius);
//   for (var i = 0; i < 2 * points + 1; i++) {
//     var r = (i % 2 == 0) ? radius : radius / 2;
//     var a = Math.PI * i / points;
//     ctx.lineTo(x + r * Math.sin(a), y + r * Math.cos(a));
//   };
//   ctx.closePath();
//   if (fillColor)
//     ctx.fill();
// }

// // Call the drawStar function with different parameters
// drawStar(100, 75, 50, 5, "#d2bacf"); // 5-sided star
