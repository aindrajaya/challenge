// const buttonPlus = document.querySelector('#plus');
// const buttonMin = document.querySelector('#min');
// const p = querySelector('p');
// let number = 0;
// buttonPlus.addEventListener('click', ()=>{
//     p.innerHTML = 'Telah di klik $(number) kali';
//     number++;
// })
// buttonMin.addEventListener('click', ()=>{
//     p.innerHTML = 'Telah di klik $(number) kali';
//     number--;
// })

var count = 0;
var countEl = document.getElementById('text');
function plus(){
    count += 1;
    countEl.innerHTML = count;
}

function min(){
    count -= 1;
   countEl.innerHTML = count;
}

document.getElementById('plus').onclick=function(){
    plus()
};

document.getElementById('min').onclick=function(){
    min()
};
