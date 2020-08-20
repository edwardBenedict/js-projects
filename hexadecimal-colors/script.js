const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector("body");

const colors = ["yellow", "lightblue", "red", "green", "#3b5998", "gray"];
colorBtn.addEventListener("click", changeColor);

function changeColor() {
  // bodyBcg.style.backgroundColor = color[2];
  let random = Math.floor(Math.random() * colors.length);
  bodyBcg.style.backgroundColor = colors[random];
}
