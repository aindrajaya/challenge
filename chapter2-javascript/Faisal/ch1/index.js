var tampil = document.getElementById('tampil');
var tulisan = document.getElementById('tulisan');
var no = 1;
tampil.addEventListener('dblclick', kalimat);

function kalimat() {
    tulisan.innerText = "Kampus Merdeka 2022 Kelas FE-7";
}