let btn = document.getElementById('btnEvent')
let text = document.getElementById('showText')
//console.log(text)
let data = 'Kampus Merdeka 2022 Kelas FE-7'

btn.addEventListener('dblclick',()=>{
    text.innerHTML= data;
})
