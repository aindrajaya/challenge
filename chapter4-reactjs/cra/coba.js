//Prosesn Asynchronous
function proses1(s){
  setTimeout(() => {
    console.log("Proses 1 selesai - Pesanan 1 dicatat")
  }, s)
}

function proses1A(s){
  setTimeout(() => {
    console.log("Proses 1 selesai - Pesanan 2 dicatat")
  }, s)
}

function proses2(s){
  setTimeout(() => {
    console.log("Proses 2 selesai - Pesanan Diproses")
  }, s)
}

function proses3(s){
  setTimeout(() => {
    console.log("Proses 3 selesai - Pesanan disajikan")
  }, s)
}

proses1(1000) //yang pesan 5 orang
proses1A(500) //tyang pesan 1 orang
proses2()
proses3()

//Summary : request = proses pesanan, memory = banyaknya waiters