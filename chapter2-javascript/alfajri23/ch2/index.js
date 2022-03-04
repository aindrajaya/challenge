let btn = document.getElementById('btnEvent')
let text = document.getElementById('showText')
console.log(text)
let data = 'Kampus Merdeka 2022 Kelas FE-7'

btn.addEventListener('dblclick',()=>{
    text.innerHTML= data;
})



let btnPlus = document.getElementById('btnPlus')
let btnMin = document.getElementById('btnMin')
let result = document.getElementById('ascText')
let count = 0

btnPlus.addEventListener('click',()=>{
    count++
    result.innerHTML = count;
})

btnMin.addEventListener('click',()=>{
    count--
    result.innerHTML = count;
})