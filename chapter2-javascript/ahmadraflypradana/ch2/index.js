const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const count = document.getElementById("count");

let number = 0;
count.innerText = number;
plus.addEventListener("click", () => {
  number += 1;
  count.innerText = number;
});
minus.addEventListener("click", () => {
  number -= 1;
  count.innerText = number;
});
