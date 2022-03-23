//Parent atau Class
class Tumbuhan {
    constructor(nama, umur, jenis) {
        //Property
        this.nama = nama;
        this.umur = umur;
        this.jenis = jenis;
    }
    deklarasi() {
        return `Ini merupakan tumbuhan ${this.nama} dengan usia ${this.umur} tahun, tumbuhan ini termasuk jenis ${this.jenis}`
    }
}

//Turunan 1
class Apel extends Tumbuhan {
    constructor(nama, umur, jenis, jangka, rasa) {
        super(nama, umur, jenis);
        this.jangka = jangka;
        this.rasa = rasa;
    }

    penjelasan1() {
        return `${super.deklarasi()}. Untuk buahnya setiap ${this.jangka} bulan dan rasanya ${this.rasa}`
    }
}

//Turunan 2
class Jeruk extends Tumbuhan {
    constructor(nama, umur, jenis, jangka, rasa) {
        super(nama, umur, jenis);
        this.jangka = jangka;
        this.rasa = rasa;
    }

    penjelasan2() {
        return `${super.deklarasi()}. Untuk buahnya setiap ${this.jangka} bulan dan rasanya ${this.rasa}`
    }
}

//Turunan 3
class Blimbing extends Tumbuhan {
    constructor(nama, umur, jenis, jangka, rasa) {
        super(nama, umur, jenis);
        this.jangka = jangka;
        this.rasa = rasa;
    }

    penjelasan3() {
        return `${super.deklarasi()}. Untuk buahnya setiap ${this.jangka} bulan dan rasanya ${this.rasa}`
    }
}

//Turunan 4
class Anggur extends Tumbuhan {
    constructor(nama, umur, jenis, jangka, rasa) {
        super(nama, umur, jenis);
        this.jangka = jangka;
        this.rasa = rasa;
    }

    penjelasan4() {
        return `${super.deklarasi()}. Untuk buahnya setiap ${this.jangka} bulan dan rasanya ${this.rasa}`
    }
}

//Turunan 5
class Pir extends Tumbuhan {
    constructor(nama, umur, jenis, jangka, rasa) {
        super(nama, umur, jenis);
        this.jangka = jangka;
        this.rasa = rasa;
    }

    penjelasan5() {
        return `${super.deklarasi()}. Untuk buahnya setiap ${this.jangka} bulan dan rasanya ${this.rasa}`
    }
}

const turunanApel = new Apel("Apel", 10, "Dikotil", 6, "manis");
const turunanJeruk = new Jeruk("Jeruk", 8, "Dikotil", 4, "masam");
const turunanBlimbing = new Blimbing("Blimbing", 15, "Dikotil", 1, "masam");
const turunanAnggur = new Anggur("Anggur", 5, "Dikotil", 9, "manis");
const turunanPir = new Pir("Pir", 7, "Dikotil", 5, "manis");

console.log(turunanApel.penjelasan1());
console.log(turunanJeruk.penjelasan2());
console.log(turunanBlimbing.penjelasan3());
console.log(turunanAnggur.penjelasan4());
console.log(turunanPir.penjelasan5());