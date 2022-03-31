const fs = require('fs'); // file system lib
const opt = {encoding: "utf-8"};

//simple callback
const callback = (err, data) => {
    console.log("Proses pembacaan file");
    if(err) return console.error("Error karena", err.message);
    console.log("Berikut ini adalah isi dari file", data)
}
// fs.readFile("./src/contohtext.txt", opt, callback)

//interval callback
let a = 0;
const Interval = setInterval(() => {
    console.log(`${a++} proses pemanggilan API`) //ini bisa jadi pemanggilan API
    if (a === 11) clearInterval(Interval)
    // callback2 = () => {
    //     callback2 = () => {
    //         callback2 = () => {
    //             callback2 = () => {

    //             }
    //         }
    //     }
    // }
},500)
console.log("Berapa kali proses") 