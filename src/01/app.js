const colors = ["green", "red", "rgba(133,122,200)", "#f15024"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

var rnd = () => {
  return Math.floor(Math.random() * colors.length);
};

btn.addEventListener("click", function () {
  const randomIndex = rnd();
  console.log(randomIndex);
  color.textContent = colors[randomIndex];
  document.body.style.backgroundColor = colors[randomIndex];
});
