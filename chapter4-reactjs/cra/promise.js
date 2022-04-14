const promise1 = new Promise(resolve => resolve('Helloo')) //Kondisi berhasil
// console.log(promise1)

function apakahPasswordBenar(katasandi){
  return new Promise((resolve, reject) => {
    console.log('Kata Sandi:', katasandi) //pemanggilan API
    if(katasandi !== 'beruang')
      return reject('Kata sandi Salah!')
    resolve("kata sandi benar")
  })
}

apakahPasswordBenar('beruangsss')
  .then(resolve => console.log(resolve))
  .catch(reject => console.error(reject))