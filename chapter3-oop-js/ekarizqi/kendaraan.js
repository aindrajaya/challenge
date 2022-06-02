class Kendaraan {
    constructor(nama, tahun, warna){
        this.nama = nama;
        this.tahun = tahun;
        this.warna = warna;
    }
    deskripsi(){
        return `${this.nama} dibuat pada tahun ${this.tahun} dengan warna ${this.warna}`
    }
}

//turunan1 
class Merk extends Kendaraan{
    constructor(nama, tahun, warna, merk){
        super(nama, tahun, warna);
        this.merk = merk;
    }

    deskripsi1(){
        return `${super.deskripsi()}. ${this.nama} diproduksi oleh ${this.merk}.`
    }
}

//turunan2
class Motor extends Kendaraan{
    constructor(nama, tahun, warna, jenis){
        super(nama, tahun, warna);
        this.jenis = jenis;
    }

    deskripsi2(){
        return `${super.deskripsi()}. ${this.nama} tergolong motor jenis ${this.jenis}.`
    }
}

//turunan 3
class Mobil extends Kendaraan{
    constructor(nama, tahun, warna, jenis){
        super(nama, tahun, warna);
        this.jenis = jenis;
    }

    deskripsi3(){
        return `${super.deskripsi()}. ${this.nama} tergolong mobil jenis ${this.jenis}.`
    }
}

//turunan 4
class Letak extends Kendaraan{
    constructor(nama, tahun, warna, letak){
        super(nama, tahun, warna);
        this.letak = letak;
    }

    deskripsi4(){
        return `${super.deskripsi()}. ${this.nama} merupakan alat transportasi ${this.letak}.`
    }
}

class Muatan extends Kendaraan{
    constructor(nama, tahun, warna, muatan){
        super(nama, tahun, warna);
        this.muatan = muatan;
    }

    deskripsi5(){
        return `${super.deskripsi()}. ${this.nama} memiliki kapasitas muatan hingga ${this.muatan}.`
    }
}

const turunan1 = new Merk("Brio", "2013", "crystal", "Honda");
const turunan2 = new Motor("Vario", "2015", "matte brown", "skuter");
const turunan3 = new Mobil("Pajero sport", "2021", "white metallic", "SUV");
const turunan4 = new Letak("Transjakarta", "2004", "merah", "darat");
const turunan5 = new Muatan("Mitsubishi L300", "2018", "hitam", "2905 Kg");


console.log(turunan1.deskripsi1());
console.log(turunan2.deskripsi2());
console.log(turunan3.deskripsi3());
console.log(turunan4.deskripsi4());
console.log(turunan5.deskripsi5());