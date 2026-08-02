class Kendaraan {
    constructor(nama,merk,tipe, warna, roda,){
        this.nama = nama;
        this.merk = merk;
        this.tipe = tipe;
        this.warna = warna;
        this.roda = roda;
    }
    cetakKendaraan(){
        return `${this.nama} ${this.merk} ${this.tipe} memiliki ${this.roda} roda dengan warna ${this.warna}`;
    }
}

// Dimensi
class Dimensi extends Kendaraan{
    constructor(nama,merk,tipe, warna, roda,tinggi,panjang,radiusputar,jaraksumburoda,lebar){
        super(nama,merk,tipe, warna, roda);
        this.tinggi = tinggi;
        this.panjang = panjang;
        this.radiusputar = radiusputar;
        this.jaraksumburoda = jaraksumburoda;
        this.lebar = lebar;
    }
    penjelasan(){
        return `${super.cetakKendaraan()} Memiliki Dimensi: \nTinggi(mm):${this.tinggi}\nPanjang(mm):${this.panjang}\nRadius Putar(m):${this.radiusputar}\nJarak sumbu roda(mm):${this.jaraksumburoda}\nLebar(mm):${this.lebar}\n`;
    }
}

// Transmisi
class Transmisi extends Kendaraan{
    constructor(nama, merk,tipe, warna, roda, transmisi,bahanbakar){
        super(nama, merk,tipe, warna, roda);
        this.transmisi = transmisi;
        this.bahanbakar = bahanbakar;
    }
    penjelasan(){
        return `${super.cetakKendaraan()} transmisinya adalah ${this.transmisi} dan menggunakan bahan bakar ${this.bahanbakar}`;
    }
}

// Mesin
class Mesin extends Kendaraan{
    constructor(nama, merk,tipe, warna, roda , cc , mesin){
        super(nama, merk,tipe, warna, roda);
        this.cc = cc;
        this.mesin = mesin;
    }
    penjelasan(){
        return `${super.cetakKendaraan()} dengan isi silinder(${this.cc}) dan memiliki konfigurasi mesin ${this.mesin}`;
    }
}

// Panggil

console.log("========= Class Transmisi Kendaraan ========");
const kendaraan1 = new Transmisi("Mobil", "Honda", "Civic Type R" , "Hitam", 4 ,"Manual" , "Bensin");
const kendaraan2 = new Transmisi("Mobil", "Mitsubisi", "Eclipse Cross" , "Merah", 4 ,"Otomatis/Matic" , "Bensin");
const kendaraan3 = new Transmisi("Mobil", "Toyota", "Yaris" , "Biru", 4 ,"Otomatis/Matic" , "Bensin");

console.log(kendaraan1.penjelasan());
console.log(kendaraan2.penjelasan());
console.log(kendaraan3.penjelasan());
console.log("\n");


console.log("========= Class Dimensi Kendaraan ========");
// (nama,merk,tipe, warna, roda,tinggi,panjang,radiusputar,jaraksumburoda,lebar)
const kendaraan4 = new Dimensi("Mobil", "Honda", "Accord" , "Hitam", 4 ,"1450", "4894", "6.1", "2830", "1862");
const kendaraan5 = new Dimensi("Mobil", "Chevrolet", "Colorado" , "Merah", 4 ,"1785", "5361", "6.1", "3096", "1872");
const kendaraan6 = new Dimensi("Mobil", "Chevrolet", "Trax" , "Biru", 4 ,"1785", "5361", "6.1", "3096", "1872");

console.log(kendaraan4.penjelasan());
console.log(kendaraan5.penjelasan());
console.log(kendaraan6.penjelasan());
console.log("\n");


console.log("========= Class Mesin Kendaraan ========");
// (nama, merk,tipe, warna, roda , cc , mesin)
const kendaraan7 = new Mesin("Mobil", "Honda", "Accord" , "Hitam", 4 ,"1498cc", "1,5L 4 silinder segaris, 16 katup VTEC Turbo + DBW");
const kendaraan8 = new Mesin("Mobil", "Mitsubisi", "Eclipse Cross" , "Merah", 4 ,"1499cc","4B40 DOHC MIVEC");
const kendaraan9 = new Mesin("Mobil", "Chevrolet", "Colorado" , "Merah", 4 ,"2449cc","2.5L Duramax DOHC, 4 Cylinder, Fixed Geometry Turbocharger (FGT) with Intercooler");

console.log(kendaraan7.penjelasan());
console.log(kendaraan8.penjelasan());
console.log(kendaraan9.penjelasan());
console.log("\n");

