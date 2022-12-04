const inputMin = document.querySelector(".input1");
const inputMax = document.querySelector(".input2");
const button = document.querySelector("button");
const result = document.querySelector(".result");

button.addEventListener("click", random);

function random() {
  const min = inputMin.value;
  const max = inputMax.value;
  const res = Math.floor(Math.random() * (max - min + 1) + min);

  if (res >= min) {
    result.innerHTML = res;
  }
}
