// Tumbuhan
class Tumbuhan {
    constructor(nama, tinggi, diameter) {
        this.nama = nama
        this.tinggi = tinggi
        this.diameter = diameter
    }

    penjelasan() {
        return `Tumbuhan ini ${this.nama}, mempunyai tinggi ${this.tinggi}, mempunyai diameter ${this.diameter}`;
    }
}

class Mawar extends Tumbuhan {
    constructor(nama, tinggi, diameter, bentukakar) {
        super(nama, tinggi, diameter)
        this.bentukakar = bentukakar
    }
    penjelasanDetail() {
        return `${super.penjelasan()}, dan memiliki bentuk akar ${this.bentukakar}`
    }
}

const Tumbuhan1 = new Mawar("Mawar", "50 cm", "10 cm", "Tunggang")

class Melati extends Tumbuhan {
    constructor(nama, tinggi, diameter, bentukakar) {
        super(nama, tinggi, diameter)
        this.bentukakar = bentukakar
    }
    penjelasanDetail() {
        return `${super.penjelasan()}, dan memiliki bentuk akar ${this.bentukakar}`
    }
}

const Tumbuhan2 = new Melati("Melati", "40 cm", "8 cm", "Serabut")

class Anggrek extends Tumbuhan {
    constructor(nama, tinggi, diameter, bentukakar) {
        super(nama, tinggi, diameter)
        this.bentukakar = bentukakar
    }
    penjelasanDetail() {
        return `${super.penjelasan()}, dan memiliki bentuk akar ${this.bentukakar}`
    }
}

const Tumbuhan3 = new Anggrek("Anggrek", "30 cm", "6 cm", "Tunggang")

class Jeruk extends Tumbuhan {
    constructor(nama, tinggi, diameter, bentukakar) {
        super(nama, tinggi, diameter)
        this.bentukakar = bentukakar
    }
    penjelasanDetail() {
        return `${super.penjelasan()}, dan memiliki bentuk akar ${this.bentukakar}`
    }
}

const Tumbuhan4 = new Jeruk("Jeruk", "20 cm", "4 cm", "Serabut")

class Tomat extends Tumbuhan {
    constructor(nama, tinggi, diameter, bentukakar) {
        super(nama, tinggi, diameter)
        this.bentukakar = bentukakar
    }
    penjelasanDetail() {
        return `${super.penjelasan()}, dan memiliki bentuk akar ${this.bentukakar}`
    }
}

const Tumbuhan5 = new Tomat("Tomat", "10 cm", "2 cm", "Tunggang")

console.log(Tumbuhan1.penjelasanDetail())
console.log(Tumbuhan2.penjelasanDetail())
console.log(Tumbuhan3.penjelasanDetail())
console.log(Tumbuhan4.penjelasanDetail())
console.log(Tumbuhan5.penjelasanDetail())

console.log(`
`)

// Hewan
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
    constructor(nama, umur, suara, jenis) {
        super(nama, umur, suara, jenis)
    }
    penjelasanDetail() {
        return `${super.introduction()}. ${super.sound()}.`
    }
}

class Kucing extends Hewan {
    constructor(nama, umur, suara, jenis) {
        super(nama, umur, suara, jenis)
    }
    penjelasanDetail() {
        return `${super.introduction()}. ${super.sound()}.`
    }
}

class Bebek extends Hewan {
    constructor(nama, umur, suara, jenis) {
        super(nama, umur, suara, jenis)
    }
    penjelasanDetail() {
        return `${super.introduction()}. ${super.sound()}.`
    }
}

class Tikus extends Hewan {
    constructor(nama, umur, suara, jenis) {
        super(nama, umur, suara, jenis)
    }
    penjelasanDetail() {
        return `${super.introduction()}. ${super.sound()}.`
    }
}

class Ayam extends Hewan {
    constructor(nama, umur, suara, jenis) {
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

console.log(`
`)

// Kendaraan
class Kendaraan {
    constructor(nama, tahun, warna) {
        this.nama = nama
        this.tahun = tahun
        this.warna = warna
    }

    penjelasan() {
        return `Kendaraan ini bernama ${this.nama}, dibuat pada tahun ${this.tahun}, mempunyai warna ${this.warna}`;
    }
}

class aventador extends Kendaraan {
    constructor(nama, tahun, warna, jeniskendaraan) {
        super(nama, tahun, warna)
        this.jeniskendaraan = jeniskendaraan
    }
    penjelasanDetail() {
        return `${super.penjelasan()} dan masuk dalam jenis ${this.jeniskendaraan}`
    }
}

const Kendaraan1 = new aventador("Aventador", "2011", "Hitam,", "Super Car");

class Avanza extends Kendaraan {
    constructor(nama, tahun, warna, jeniskendaraan) {
        super(nama, tahun, warna)
        this.jeniskendaraan = jeniskendaraan
    }
    penjelasanDetail() {
        return `${super.penjelasan()} dan masuk dalam jenis ${this.jeniskendaraan}`
    }
}

const Kendaraan2 = new Avanza("Avanza", "2022", "Putih", "MPV")

class Alphard extends Kendaraan {
    constructor(nama, tahun, warna, jeniskendaraan) {
        super(nama, tahun, warna)
        this.jeniskendaraan = jeniskendaraan
    }
    penjelasanDetail() {
        return `${super.penjelasan()} dan masuk dalam jenis ${this.jeniskendaraan}`
    }
}

const Kendaraan3 = new Alphard("Alphard", "2020", "Hitam", "Premium MPV")

class lancer extends Kendaraan {
    constructor(nama, tahun, warna, jeniskendaraan) {
        super(nama, tahun, warna)
        this.jeniskendaraan = jeniskendaraan
    }
    penjelasanDetail() {
        return `${super.penjelasan()} dan masuk dalam jenis ${this.jeniskendaraan}`
    }
}

const Kendaraan4 = new lancer("Lancer Evolution", "2000", "Merah", "Sedan")

class Supra extends Kendaraan {
    constructor(nama, tahun, warna, jeniskendaraan) {
        super(nama, tahun, warna)
        this.jeniskendaraan = jeniskendaraan
    }
    penjelasanDetail() {
        return `${super.penjelasan()} dan masuk dalam jenis ${this.jeniskendaraan}`
    }
}

const Kendaraan5 = new Supra("Supra MK5", "2020", "Hitam", "Sport Car")

console.log(Kendaraan1.penjelasanDetail())
console.log(Kendaraan2.penjelasanDetail())
console.log(Kendaraan3.penjelasanDetail())
console.log(Kendaraan4.penjelasanDetail())
console.log(Kendaraan5.penjelasanDetail())