class kendaraan {
    constructor(nama, tahun) {
        this.nama = nama;
        this.tahun = tahun;
    }
    intro() {
        return `${this.nama}, keluaran tahun ${this.tahun}`
    }
}

class jeep extends kendaraan {
    constructor(nama, tahun, merk, medan) {
        super(nama, tahun)
        this.merk = merk;
        this.medan = medan;
    }
    detail() {
        return `${super.intro()}. Mobil ini berasal dari pabrikan ${this.merk}, dapat dijalankan pada medan ${this.medan}.`
    }
}

const kendaraan1 = new jeep("cherooke", 2020, "jeep", "berbatu");

class honda extends kendaraan {
    constructor(nama, tahun, jenis, jumlahRoda) {
        super(nama, tahun)
        this.jenis = jenis;
        this.jumlahRoda = jumlahRoda;
    }
    penjelasan() {
        return `${super.intro()}. Kendaraan ini merupakan jenis ${this.jenis}, dan memiliki jumlah roda ${this.jumlahRoda}.`
    }
}

const kendaraan2 = new honda("CBR150cc", 2021, "kendaraan bermotor", 2);

class yamaha extends kendaraan {
    constructor(nama, tahun, kapasitasMesin, targetMarketing) {
        super(nama, tahun)
        this.kapasitasMesin = kapasitasMesin;
        this.targetMarketing = targetMarketing;
    }
    detailPenjelasan() {
        return `${super.intro()}, merupakan motor ${this.kapasitasMesin}cc yang diminati di kalangan ${this.targetMarketing}.`
    }
}

const kendaraan3 = new yamaha("NMAX", 2019, 160, "anak muda");

class harley extends kendaraan {
    constructor(nama, tahun, tipe, mesin) {
        super(nama, tahun)
        this.tipe = tipe;
        this.mesin = mesin;
    }
    deskripsi() {
        return `${super.intro()}, merupakan motor ${this.tipe} yang memiliki mesin ${this.mesin} pertama yang dibuat oleh Harley Davidson.`
    }
}

const kendaraan4 = new harley("Harley Livewire", 2021, "sport", "electric");

class daihatsu extends kendaraan {
    constructor(nama, tahun, jumlahKursi, fitur) {
        super(nama, tahun)
        this.jumlahKursi = jumlahKursi;
        this.fitur = fitur;
    }
    deskripsiKendaraan() {
        return `${super.intro()}, memiliki ${this.jumlahKursi} kursi, yang sudah dilengkapi dengan fitur ${this.fitur}`
    }
}

const kendaraan5 = new daihatsu("Daihatsu All New Xenia", 2021, 6, "airbag.");

console.log(kendaraan1.detail());
console.log(kendaraan2.penjelasan());
console.log(kendaraan3.detailPenjelasan());
console.log(kendaraan4.deskripsi());
console.log(kendaraan5.deskripsiKendaraan());