class Kendaraan {
    constructor(nama, tahun, warna) {
        this.nama = nama
        this.tahun = tahun
        this.warna = warna
    }

    penjelasan() {
        return `kendaraan ini bernama ${this.nama}, dibuat pada tahun ${this.tahun}, mempunyai warna ${this.warna}`;
    }
}

class aventador extends Kendaraan {
    constructor(nama, tahun, warna, jeniskendaraan) {
        super(nama, tahun, warna)
        this.jeniskendaraan = jeniskendaraan
        this.deklarasi = () => {
            return super.penjelasan()
        }
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
        this.deklarasi = () => {
            return super.penjelasan()
        }
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
        this.deklarasi = () => {
            return super.penjelasan()
        }
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
        this.deklarasi = () => {
            return super.penjelasan()
        }
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
        this.deklarasi = () => {
            return super.penjelasan()
        }
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