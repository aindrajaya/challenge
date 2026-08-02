class tumbuhan {
    constructor(nama, bentukAkar) {
        this.nama = nama;
        this.bentukAkar = bentukAkar;
    }
    intro() {
        return `${this.nama}, merupakan tumbuhan berakar ${this.bentukAkar}`
    }
}

class trembesi extends tumbuhan {
    constructor(nama, bentukAkar, habitat) {
        super(nama, bentukAkar)
        this.habitat = habitat;
    }
    detail() {
        return `${super.intro()}yang hidup di ${this.habitat}.`
    }
}

const tumbuhan1 = new trembesi("trembesi", "tunggang", "daerah tropis");

class mangga extends tumbuhan {
    constructor(nama, bentukAkar, jenis) {
        super(nama, bentukAkar)
        this.jenis = jenis;
    }
    penjelasan() {
        return `${super.intro()}, tumbuhan ini merupakan jenis tanaman ${this.jenis}.`
    }
}

const tumbuhan2 = new mangga("mangga", "tunggang", "buah");

class serai extends tumbuhan {
    constructor(nama, bentukAkar, kegunaan) {
        super(nama, bentukAkar)
        this.kegunaan = kegunaan;
    }
    detailPenjelasan() {
        return `${super.intro()}, tumbuhan ini biasa digunakan untuk ${this.kegunaan}.`
    }
}

const tumbuhan3 = new serai("serai", "serabut", "bumbu dapur");

class mawar extends tumbuhan {
    constructor(nama, bentukAkar, kelebihan) {
        super(nama, bentukAkar)
        this.kelebihan = kelebihan;
    }
    deskripsi() {
        return `${super.intro()}, tanaman ini memiliki ${this.kelebihan} yang sangat indah.`
    }
}

const tumbuhan4 = new mawar("mawar", "serabut", "bunga");

class teratai extends tumbuhan {
    constructor(nama, bentukAkar, daun) {
        super(nama, bentukAkar)
        this.daun = daun;
    }
    deskripsitumbuhan() {
        return `${super.intro()}, memiliki daun ${this.daun}.`
    }
}

const tumbuhan5 = new teratai("teratai", "serabut", "lebar");

console.log(tumbuhan1.detail());
console.log(tumbuhan2.penjelasan());
console.log(tumbuhan3.detailPenjelasan());
console.log(tumbuhan4.deskripsi());
console.log(tumbuhan5.deskripsitumbuhan());