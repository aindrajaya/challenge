// Mas Daniel
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
        this.deklarasi = () => {
            return super.penjelasan()
        }
    }
    penjelasanDetail() {
        return `${super.penjelasan()} dan memiliki bentuk akar ${this.bentukakar}`
    }
}

const Tumbuhan1 = new Mawar("Mawar", "50 cm", "2 cm", "Tunggang")

class Melati extends Tumbuhan {
    constructor(nama, tinggi, diameter, bentukakar) {
        super(nama, tinggi, diameter)
        this.bentukakar = bentukakar
        this.deklarasi = () => {
            return super.penjelasan()
        }
    }
    penjelasanDetail() {
        return `${super.penjelasan()} dan memiliki bentuk akar ${this.bentukakar}`
    }
}

const Tumbuhan2 = new Melati("Melati", "50 cm", "2 cm", "Tunggang")

class Anggrek extends Tumbuhan {
    constructor(nama, tinggi, diameter, bentukakar) {
        super(nama, tinggi, diameter)
        this.bentukakar = bentukakar
        this.deklarasi = () => {
            return super.penjelasan()
        }
    }
    penjelasanDetail() {
        return `${super.penjelasan()} dan memiliki bentuk akar ${this.bentukakar}`
    }
}

const Tumbuhan3 = new Anggrek("Anggrek", "50 cm", "2 cm", "Tunggang")

class Jeruk extends Tumbuhan {
    constructor(nama, tinggi, diameter, bentukakar) {
        super(nama, tinggi, diameter)
        this.bentukakar = bentukakar
        this.deklarasi = () => {
            return super.penjelasan()
        }
    }
    penjelasanDetail() {
        return `${super.penjelasan()} dan memiliki bentuk akar ${this.bentukakar}`
    }
}

const Tumbuhan4 = new Jeruk("Jeruk", "50 cm", "2 cm", "Tunggang")

class Tomat extends Tumbuhan {
    constructor(nama, tinggi, diameter, bentukakar) {
        super(nama, tinggi, diameter)
        this.bentukakar = bentukakar
        this.deklarasi = () => {
            return super.penjelasan()
        }
    }
    penjelasanDetail() {
        return `${super.penjelasan()} dan memiliki bentuk akar ${this.bentukakar}`
    }
}

const Tumbuhan5 = new Tomat("Tomat", "50 cm", "2 cm", "Tunggang")

console.log(Tumbuhan1.penjelasanDetail())
console.log(Tumbuhan2.penjelasanDetail())
console.log(Tumbuhan3.penjelasanDetail())
console.log(Tumbuhan4.penjelasanDetail())
console.log(Tumbuhan5.penjelasanDetail())