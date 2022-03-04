const buttonUp = document.querySelector('#up');
const buttonDown = document.querySelector('#down');
const p = document.querySelector('#paragraph');
let count = 0
buttonUp.addEventListener('click', () => {
    p.innerHTML = `Anda mengklik ${count} kali`
    count++;
});
buttonDown.addEventListener('click', () => {
    p.innerHTML = `Anda mengklik ${count} kali`
    count--;
});