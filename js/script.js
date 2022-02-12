"use strict";

let btnLogout = document.querySelector(".book__logout-btn");
let localToken = window.localStorage.getItem("token");

if (!localToken) {
  window.location.replace("login.html");
}

btnLogout.addEventListener("click", function () {
  window.localStorage.removeItem("token");
  window.location.replace("login.html");
});