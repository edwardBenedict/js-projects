const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const container = document.querySelector(".images");

let counter = 0;

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function nextSlide() {
  container.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 500,
    fill: "forwards",
  });
  if (counter === 8) {
    counter = -1;
  }
  counter++;
  container.style.backgroundImage = `url(image/bcg-${counter}.jpg)`;
}

function prevSlide() {
  container.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 500,
    fill: "forwards",
  });
  if (counter === 0) {
    counter = 9;
  }
  counter--;
  container.style.backgroundImage = `url(image/bcg-${counter}.jpg)`;
}
