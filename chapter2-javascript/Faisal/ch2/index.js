const tambah = document.getElementById('tambah');
const kurang = document.getElementById('kurang');
const hasil = document.getElementById('hasil');
var no = 1;
tambah.addEventListener("click", tambahin);
kurang.addEventListener("click", kurangin);

function tambahin() {
    hasil.innerHTML = no++;
}

function kurangin() {
    hasil.innerHTML = no--;
}