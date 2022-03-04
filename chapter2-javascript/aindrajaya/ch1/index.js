const tombol = document.getElementBiId("klik");
const paragraf = document.getElementBiId("show");

tombol.addEventListener('dblclick', () => {
    paragraf.innerText = "Kampus Merdeka 2022 Kelas FE-7";
})
