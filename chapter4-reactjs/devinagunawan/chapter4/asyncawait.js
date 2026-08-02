let punyaBuku = false;
//function beli buku
const beliBuku = () => new Promise(resolve => {
    setTimeout(() => {
        punyaBuku = true
        resolve()
    }, 1000)
})

const gambar = judul => {
    if(!punyaBuku) return Promise.reject('Gaada buku')
    return Promise.resolve({
        id: Date.now(),
        title: judul,
        creatAt: Date()
    })
}

//function utama yang menjalankan semua dungsi diatas
const main = async(book) => {
    if(!punyaBuku) await beliBuku()
    const hasilGambar = await gambar(book);
    console.log(hasilGambar);
}
main("naruto")
main("doraemon")
main("hatori")