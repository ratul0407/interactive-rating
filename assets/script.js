"use strict";
const submit = document.querySelector(".submit");
const span = document.querySelectorAll("span");
const ratingNum = document.querySelector(".rating-num");
let rating;
for (let i = 0; i < span.length; i++) {
  span[i].addEventListener("click", () => {
    if (rating) {
      rating.style.color = "#7C8798";
      rating.style.backgroundColor = "#3F4F5E";
      rating.style.borderColor = "#3F4F5E";
    }
    rating = span[i];
    rating.style.color = "#fff";
    rating.style.backgroundColor = "hsl(25, 97%, 53%)";
    rating.style.borderColor = "hsl(25, 97%, 53%)";
  });
}

submit.addEventListener("click", () => {
  if (rating) {
    document.querySelector("main").classList.add("hidden");
    document.querySelector("article").classList.remove("hidden");
    ratingNum.textContent = rating.textContent;
  }
});
