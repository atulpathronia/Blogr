"use strict";

const links = document.querySelectorAll(".main-nav-link");
const hamburgBtn = document.querySelector(".hamburgBtn");
const openIcon = document.querySelector(".open-icon");
const CloseIcon = document.querySelector(".close-icon");
const menu = document.querySelector(".main-nav-list");

hamburgBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    openIcon.classList.add("hidden");
    CloseIcon.classList.remove("hidden");
  } else {
    openIcon.classList.remove("hidden");
    CloseIcon.classList.add("hidden");
  }
});

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.target.nextElementSibling.classList.toggle("hidden");
  });
});
