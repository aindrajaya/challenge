//Proses Asynchronous
function proses1(s){
    setTimeout(() => {
        console.log("Proses 1 selesai - Pesananan 1 dicatat")
    }, s)
}
function proses1A(s){
    setTimeout(() => {
        console.log("Proses 1 selesai - Pesananan 2 dicatat")
    }, s)
}
function proses2(s){
    setTimeout(() => {
        console.log("Proses 2 selesai - Pesanan diproses")
    }, s)
}
function proses3(s){
    setTimeout(() => {
        console.log("Proses 3 selesai - Pesanana disajikan")
    }, s)
}
proses1(1000) //yang pesan 5 orang
proses1A(200) //yang pesan 1 orang
// proses2()
// proses3()

//Summary :
// request = proses pesanan
// memory = banyaknya waiters

// multithread = bisa ngejalanin lebih dari 1 proses sekaligus

// menjalankan asynchronous ada 3 cara : promise, callback, asyncawait

// callback = menunggu tanggapan, data yang di request udah ready atau belum
