const plus = document.getElementById('plus');
const min = document.getElementById('min');
const show = document.getElementById('showNumber');
let counter = 0;

plus.addEventListener(increment);
min.addEventListener(decrement);

function increment() {
    counter++;
    show.innerHTML = `Hasil klik: ${counter}`;
};

function decrement() {
    counter--;
    show.innerHTML = `Hasil klik: ${counter}`;
}

