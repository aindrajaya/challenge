## Challenges OOP
1. Buat suatu turunan dari Object Parent Tumbuhan (5 Turunan, minimal 3 property untuk parent dan tambah 2 property (1 harus method) untuk turunan)
2. Buat suatu turunan dari Object Parent Kendaraan (5 Turunan, minimal 3 property untuk parent dan tambah 2 property (1 harus method) untuk turunan)
3. Buat suatu turunan dari Object Parent Hewan (5 Turunan, minimal 3 property untuk parent dan tambah 2 property (1 harus method) untuk turunan)

### Example
```js
//Parent atau Class
class Person {
  constructor(nama, umur){
    //Property
    this.nama = nama;
    this.umur = umur;
  }
  intro(){
    return `fungsi perkenalan`
  }
}

//Sub-class
class Guru extends Person {
  constructor(){
    super()
  }
  //Tambahkan Method
}
```
