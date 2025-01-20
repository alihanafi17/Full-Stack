'use strict'

const burgerMenu = document.querySelector('.menu_burger');
const burgerMenuClose = document.querySelector('.menu_burger-closes');
const mainMenu = document.querySelector('.menu_main');

burgerMenu.addEventListener("click", function () {
   console.log("sgsdfs");
   burgerMenu.classList.toggle('active');
   burgerMenuClose.classList.toggle('active');
   mainMenu.classList.toggle('show');
});
burgerMenuClose.addEventListener("click", function () {
   burgerMenu.classList.toggle('active');
   burgerMenuClose.classList.toggle('active');
   mainMenu.classList.toggle('show');
});