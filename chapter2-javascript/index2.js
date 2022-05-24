const p = document.querySelector('p');
const buttonTambah = document.querySelector('#tambah');
const buttonKurang = document.querySelector('#kurang');

let count = 0;
buttonTambah.addEventListener('click',() => {
    p.innerHTML =`Terklik ${count} kali`;
    count++;
})
buttonKurang.addEventListener('click',() => {
    p.innerHTML =`Terklik ${count} kali`;
    count--;
})