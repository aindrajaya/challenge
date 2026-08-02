const promise1 = new Promise(resolve => resolve('Helloo')) //berhasil
// console.log(promise1)

function apakahPasswordBenar(katasandi){
    return new Promise((resolve, reject) => {
        console.log('Kata Sandi', katasandi)
        if(katasandi !== 'beruang')
            return reject('Kata sandi salah!')
        resolve("kata sandi benar")
    })
}
apakahPasswordBenar('beruangs')
.then(resolve => console.log(resolve))
.catch(reject => console.log(reject))