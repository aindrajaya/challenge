// Kevin
class Hewan {
    constructor(nama, umur, suara, jenis) {
        this.nama = nama;
        this.umur = umur;
        this.suara = suara;
        this.jenis = jenis
    }
    introduction() {
        return `Hewan ini bernama ${this.nama}, hewan ini berumur ${this.umur}. ${this.nama} berjenis ${this.jenis}`;
    }
    sound() {
        return `${this.nama} bersuara seperti ini ${this.suara}`;
    }
}

class Singa extends Hewan {
    constructor(nama, umur, suara, jenis){
        super(nama, umur, suara, jenis)
    }
    penjelasanDetail() {
        return `${super.introduction()}. ${super.sound()}.`
    }
}

class Kucing extends Hewan {
    constructor(nama, umur, suara, jenis){
        super(nama, umur, suara, jenis)
    }
    penjelasanDetail() {
        return `${super.introduction()}. ${super.sound()}.`
    }
}

class Bebek extends Hewan {
    constructor(nama, umur, suara, jenis){
        super(nama, umur, suara, jenis)
    }
    penjelasanDetail() {
        return `${super.introduction()}. ${super.sound()}.`
    }
}

class Tikus extends Hewan {
    constructor(nama, umur, suara, jenis){
        super(nama, umur, suara, jenis)
    }
    penjelasanDetail() {
        return `${super.introduction()}. ${super.sound()}.`
    }
}

class Ayam extends Hewan {
    constructor(nama, umur, suara, jenis){
        super(nama, umur, suara, jenis)
    }
    penjelasanDetail() {
        return `${super.introduction()}. ${super.sound()}.`
    }
}

const Hewan1 = new Singa("Singa", "10 Tahun", "ROAARRR", "Karnivora");
const Hewan2 = new Kucing("Kucing", "5 Bulan", "Miaw", "Karnivora");
const Hewan3 = new Bebek("Bebek", "3 Bulan", "Wek wek", "Omnivora");
const Hewan4 = new Tikus("Tikus", "6 Bulan", "ciitt ciitt", "Omnivora");
const Hewan5 = new Ayam("Ayam", "1 Tahun", "Kukuruyuk", "Omnivora");

console.log(Hewan1.penjelasanDetail());
console.log(Hewan2.penjelasanDetail());
console.log(Hewan3.penjelasanDetail());
console.log(Hewan4.penjelasanDetail());
console.log(Hewan5.penjelasanDetail());