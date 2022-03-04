const buttonInc = document.querySelector("#inc");
const buttonDec = document.querySelector("#dec");
const p = document.querySelector("p");
let count = 0;
buttonInc.addEventListener("click", () => {
  p.innerText = `You clicked ${count} times`;
  count++;
});
buttonDec.addEventListener("click", () => {
  p.innerText = `You clicked ${count} times`;
  count--;
});
