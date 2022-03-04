const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const result = document.getElementById("hasil");

let angkaAwal = 0;
plus.addEventListener("click", () => {
    angkaAwal++;
    result.innerText = angkaAwal;
});

minus.addEventListener("click", () => {
    angkaAwal--;
    result.innerText = angkaAwal;
});