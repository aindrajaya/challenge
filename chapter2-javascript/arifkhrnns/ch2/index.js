const btnInc = document.getElementById('btnInc');
const btnDec = document.getElementById('btnDec');
const showNumber = document.getElementById('showNumber');
let counter = 0;
btnInc.addEventListener('click', () => {
    counter++;
    showNumber.innerHTML = `Number ${counter}`;
});
btnDec.addEventListener('click', () => {
    counter--;
    showNumber.innerHTML = `Number ${counter}`;
});