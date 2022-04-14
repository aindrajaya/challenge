const fs = require('fs'); //File System lib
const opt = {encoding: "utf-8"};

//Simple Callback
const callback = (err, data) => {
  console.log("Proses pembacaan file");
  // if(err) return console.error("Error: file tidak ada");
  if(data) return console.log("Berikut adalah isi dari File", data);
  console.error("Error: file tidak ada");
}
fs.readFile("./folder/files.txt", opt, callback);

//Interval Callback
let a = 0;
const Interval = setInterval(() => {
  // console.log(`${++a} proses pemanggilan API`) //Ini bisa jadi pemanggilan API
  if(a === 10) clearInterval(Interval);
  callback2 = () => {
    callback2 = () => {
      callback2 = () => {
        callback2 = () => {
          callback2 = () => {
            callback2 = () => {

            }
          }
        }
      }
    }
  }
}, 500)
// console.log("Berapa kali proses pemanggilan")