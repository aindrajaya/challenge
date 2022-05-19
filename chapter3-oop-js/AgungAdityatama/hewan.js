//Parent atau Class
class Hewan {
    constructor(nama, namaIlmiah, jenis) {
        //Property
        this.nama = nama;
        this.namaIlmiah = namaIlmiah;
        this.jenis = jenis;
    }
    hewan() {
        return `Ini merupakan ${this.nama} dengan nama llmiahnya ${this.namaIlmiah}, hewan ini masuk jenis ${this.jenis}.`
    }
}

//Turunan 1
class Ayam extends Hewan {
    constructor(nama, namaIlmiah, jenis, makanan, suara) {
        super(nama, namaIlmiah, jenis);
        this.makanan = makanan;
        this.suara = suara;
    }

    ayam() {
        return `${super.hewan()} Hewan ini pemakan ${this.makanan} dengan ciri suaranya ${this.suara}.`
    }
}
//Turunan 2
class Bebek extends Hewan {
    constructor(nama, namaIlmiah, jenis, makanan, suara) {
        super(nama, namaIlmiah, jenis);
        this.makanan = makanan;
        this.suara = suara;
    }

    bebek() {
        return `${super.hewan()} Hewan ini pemakan ${this.makanan} dengan ciri suaranya ${this.suara}.`
    }
}
//Turunan 3
class Anjing extends Hewan {
    constructor(nama, namaIlmiah, jenis, makanan, suara) {
        super(nama, namaIlmiah, jenis);
        this.makanan = makanan;
        this.suara = suara;
    }

    anjing() {
        return `${super.hewan()} Hewan ini pemakan ${this.makanan} dengan ciri suaranya ${this.suara}.`
    }
}
//Turunan 4
class Kucing extends Hewan {
    constructor(nama, namaIlmiah, jenis, makanan, suara) {
        super(nama, namaIlmiah, jenis);
        this.makanan = makanan;
        this.suara = suara;
    }

    kucing() {
        return `${super.hewan()} Hewan ini pemakan ${this.makanan} dengan ciri suaranya ${this.suara}.`
    }
}
//Turunan 5
class Sapi extends Hewan {
    constructor(nama, namaIlmiah, jenis, makanan, suara) {
        super(nama, namaIlmiah, jenis);
        this.makanan = makanan;
        this.suara = suara;
    }

    sapi() {
        return `${super.hewan()} Hewan ini pemakan ${this.makanan} dengan ciri suaranya ${this.suara}.`
    }
}

const hewan1 = new Ayam("Ayam", "Gallus gallus domesticus", "Burung", "Segalanya", "Petok-petok");
const hewan2 = new Bebek("Bebek", "Anas platyrhynchos domesticus", "Burung", "Segalanya", "Kwek-kwek");
const hewan3 = new Anjing("Anjing", "Canis lupus familiaris", "Mamalia", "Daging", "Gug-gug");
const hewan4 = new Kucing("Kucing", "Felis catus", "Mamalia", "Daging", "Meow");
const hewan5 = new Sapi("Sapi", "Bos taurus", "Mamalia", "Rumput", "Mooo");

console.log(hewan1.ayam());
console.log(hewan2.bebek());
console.log(hewan3.anjing());
console.log(hewan4.kucing());
console.log(hewan5.sapi());