class Tumbuhan {
    constructor(nama, jenis, umur){
        this.nama = nama;
        this.jenis = jenis;
        this.umur = umur;
    }
    deskripsi(){
        return `${this.nama} ini berumur ${this.umur}. Ia merupakan tumbuhan yang masuk dalam golongan ${this.jenis} `
    }
}

// turunan 1
class Bunga extends Tumbuhan{
    constructor(nama, jenis, umur, kelopak){
        super(nama, jenis, umur);
        this.kelopak= kelopak;
        // this.deskripsi = deskripsi;

    }
    deskripsi1(){
        return `Bunga ${super.deskripsi()}. Ia memiliki kelopak berwarna ${this.kelopak}`
    }
}

//turunan 2
class Buah extends Tumbuhan{
    constructor(nama, jenis, umur, rasa){
        super(nama, jenis, umur);
        this.rasa = rasa;
    }
    deskripsi2(){
        return `Pohon ${super.deskripsi()}. Buah yang dihasilkan memiliki rasa ${this.rasa}. `
    }
}

//turunan 3
class Daun extends Tumbuhan{
    constructor(nama, jenis, umur, daun){
        super(nama, jenis, umur);
        this.daun = daun;
    }
    deskripsi3(){
        return `Tanaman ${super.deskripsi()}. ${this.nama} memiliki jenis daun ${this.daun}`
    }
}

//turunan 4
class Akar extends Tumbuhan{
    constructor(nama, jenis, umur, akar){
        super(nama, jenis, umur);
        this.akar= akar;
    }
    deskripsi4(){
        return `Tanaman ${super.deskripsi()}. ${this.nama} memiliki jenis akar ${this.akar}`
    }
}

//turunan 5
class Tinggi extends Tumbuhan{
    constructor(nama, jenis, umur,tinggi){
        super(nama, jenis, umur);
        this.tinggi=tinggi;
    }
    deskripsi5(){
        return `Tanaman ${super.deskripsi()}. Tanaman ini memiliki tinggi ${this.tinggi}`
    }
}

const turunan1 = new Bunga ("Mawar","bunga", "3 tahun", "merah" );
const turunan2 = new Buah ("mangga", "buah", "5 tahun", "manis sedikit masam");
const turunan3 = new Daun("singkong", "umbi-umbian", "8 bulan",  "menjari");
const turunan4 = new Akar ("singkong","umbi-umbian", "8 bulan", "serabut");
const turunan5 = new Tinggi("mangga", "buah", "5 tahun", "12 meter")

console.log(turunan1.deskripsi1());
console.log(turunan2.deskripsi2());
console.log(turunan3.deskripsi3());
console.log(turunan4.deskripsi4());
console.log(turunan5.deskripsi5());