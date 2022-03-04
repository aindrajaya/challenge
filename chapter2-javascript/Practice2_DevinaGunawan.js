const buttonincrement = document.querySelector('#inc1');
const buttondecrement = document.querySelector('#dec1');
const p = document.querySelector('p');
let count = 0; 
buttonincrement.addEventListener("click",() =>{
    p.innerText =`click ${count}`;
    count++;
})
buttondecrement.addEventListener("click",() =>{
    p.innerText = `click ${count}`;
    count--;
})