const inc = document.querySelector(".inc");
const dec = document.querySelector(".dec");
const paragraf = document.querySelector("p");
let count = 0;
inc.addEventListener("click", function(event) {
  paragraf.innerText = count++;
})
dec.addEventListener("click", function(event) {
  paragraf.innerText = count--;
})