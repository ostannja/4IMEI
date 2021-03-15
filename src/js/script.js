"use strict";

var popups = document.querySelectorAll(".info_icon");
Array.prototype.forEach.call(popups, function (el) {
  el.onclick = function () {
    this.nextElementSibling.style.display = "block";
  };
});

var close = document.querySelectorAll(".close_popup");

Array.prototype.forEach.call(close, function (cl) {
  cl.onclick = function () {
    this.parentElement.style.display = "none";
  };
});

document.getElementById("zoom").addEventListener("click", function () {
  document.querySelector(".zoom_bg").style.display = "block";
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".zoom_bg").style.display = "none";
});

document.addEventListener("click", function (event) {
  var e = document.querySelector("modal_content");
  if (!e.contains(event.target)) e.style.display = "none";
});

document.querySelector("info").addEventListener("click", function () {
  document.querySelector(".report_popup").style.display = "block";
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".zoom_bg").style.display = "none";
});

// const popup = document.querySelector(".popup");
// function showPopup() {
//   popup.classList.add("open");
// }
// function hidePopup() {
//   popup.classList.remove("open");
// }

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
