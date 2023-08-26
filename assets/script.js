"use strict";
const submit = document.querySelector(".submit");
const span = document.querySelectorAll("span");
const ratingNum = document.querySelector(".rating-num");
let rating;
for (let i = 0; i < span.length; i++) {
  span[i].addEventListener("click", () => {
    rating = span[i].textContent;
    span[i].style.backgroundColor = "hsl(25, 97%, 53%)";
    span[i].style.Color = "white";
    span[i].style.borderColor = "hsl(25, 97%, 53%)";
  });
}

submit.addEventListener("click", () => {
  if (rating) {
    document.querySelector("main").classList.add("hidden");
    document.querySelector("article").classList.remove("hidden");
    ratingNum.textContent = rating;
  }
});
