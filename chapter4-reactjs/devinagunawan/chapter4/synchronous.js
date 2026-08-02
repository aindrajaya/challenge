//Proses Synchronous
function proses1(){
    setTimeout(() => {
        console.log("Proses 1 selesai - Pesananan dicatat")
    }, 1000)
}
function proses2(){
    setTimeout(() => {
        console.log("Proses 2 selesai - Pesanan diproses")
    }, 2000)
}
function proses3(){
    setTimeout(() => {
        console.log("Proses 3 selesai - Pesanana disajikan")
    }, 3000)
}
proses1()
proses2()
proses3()