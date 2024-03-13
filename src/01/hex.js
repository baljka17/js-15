const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

var rnd = () => {
  return Math.floor(Math.random() * colors.length);
};

btn.addEventListener("click", function () {
  let clr = "";
  for (let i = 0; i < 6; i++) {
    const randomIndex = rnd();
    clr += colors[randomIndex];
  }
  clr = "#" + clr;
  color.textContent = clr;
  document.body.style.backgroundColor = clr;
});
