let count = 0;

const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    setNumber();
    if (count > 0) {
      value.classList.add("text-green-600");
      value.classList.remove("text-red-600");
    } else if (count < 0) {
      value.classList.remove("text-green-600");
      value.classList.add("text-red-600");
    } else {
      value.classList.remove("text-green-600");
      value.classList.remove("text-red-600");
    }
  });
});

let setNumber = () => {
  value.innerHTML = count;
};
