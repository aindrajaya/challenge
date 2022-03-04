const plus = document.getElementById("tambah");
const minus = document.getElementById("kurang");
const angka = document.getElementById("angka");

let num = 0;
plus.addEventListener("click", () => {
  num++;
  angka.innerHTML = num;
});

minus.addEventListener("click", () => {
  num--;
  angka.innerHTML = num;
});

