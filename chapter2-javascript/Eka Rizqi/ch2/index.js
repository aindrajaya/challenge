const buttonPlus = document.querySelector('#plus');
const buttonMin = document.querySelector('#min');
const p = document.querySelector('p');
let count = 0;
buttonPlus.addEventListener("click", () =>{
    p.innerText = `Telah di klik ${count} kali `;
    count++;
})
buttonMin.addEventListener("click", () =>{
    p.innerText = `Telah di klik ${count} kali `;
    count--;
})

// var count = 0;
// var countEl = document.getElementById('text');
// function plus(){
//     count += 1;
//     countEl.innerHTML = count;
// }

// function min(){
//     count -= 1;
//    countEl.innerHTML = count;
// }

// document.getElementById('plus').onclick=function(){
//     plus()
// };

// document.getElementById('min').onclick=function(){
//     min()
// };
