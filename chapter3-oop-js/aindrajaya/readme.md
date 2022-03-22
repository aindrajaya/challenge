## Challenges OOP
1. Buat suatu turunan dari Object Parent Tumbuhan (5 Turunan, minimal property 3)
2. Buat suatu turunan dari Object Parent Kendaraan (5 Turunan, minimal property 3)
3. Buat suatu turunan dari Object Parent Hewan (5 Turunan, minimal property 3)

### Example
```js
//Parent atau Class
class Person {
  constructor(nama, umur){
    //Property
    this.nama = nama;
    this.umur = umur;
  }
  intro: () => {
    return `fungsi perkenalan`
  }
}

//Sub-class
class Guru extends Person {
  constructor(){
    super()
  }
}
```
