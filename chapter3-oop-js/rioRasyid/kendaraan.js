//parent class
class Kendaraan{
    constructor(nama, tahun, warna){
        //property
        this.nama = nama;
        this.tahun = tahun;
        this.warna = warna;  
    }
    //methods
    desc(){
        return `Mobil ini bernama ${this.nama} Mobil ini dibuat pada tahun ${this.tahun} dan memiliki warna ${this.warna}.`
    }
}

class Jeep extends Kendaraan{
    constructor(nama, tahun, warna, pabrik, kota){
        super(nama, tahun, warna);
        this.pabrik = pabrik;
        this.kota = kota;

        this.desc1 = () => {
            return super.desc();
        }
    }
    descDetail(){
        return `${super.desc()} Mobil ini dibuat oleh pabrik ${this.pabrik} asal kota ${this.kota}.`
    }
}
const kendaraan1 = new Jeep("JEEP","2001","biru","PT.JEEP","Semarang");

class Tesla extends Kendaraan{
    constructor(nama, tahun, warna, pabrik, kota){
        super(nama, tahun, warna);
        this.pabrik = pabrik;
        this.kota = kota;

        this.desc1 = () => {
            return super.desc();
        }
    }
    descDetail(){
        return `${super.desc()} Mobil ini dibuat oleh pabrik ${this.pabrik} asal kota ${this.kota}.`
    }
}
const kendaraan2 = new Tesla("Tesla","2019","merah","PT.TESLA","New York");

class Toyota extends Kendaraan{
    constructor(nama, tahun, warna, pabrik, kota){
        super(nama, tahun, warna);
        this.pabrik = pabrik;
        this.kota = kota;

        this.desc1 = () => {
            return super.desc();
        }
    }
    descDetail(){
        return `${super.desc()} Mobil ini dibuat oleh pabrik ${this.pabrik} asal kota ${this.kota}.`
    }
}
const kendaraan3 = new Toyota("Toyota","2004","putih","PT.TOYOTA","Tokyo");

class Pajero extends Kendaraan{
    constructor(nama, tahun, warna, pabrik, kota){
        super(nama, tahun, warna);
        this.pabrik = pabrik;
        this.kota = kota;

        this.desc1 = () => {
            return super.desc();
        }
    }
    descDetail(){
        return `${super.desc()} Mobil ini dibuat oleh pabrik ${this.pabrik} asal kota ${this.kota}.`
    }
}
const kendaraan4 = new Toyota("Pajero","2002","hitam","PT.PAJERO","Jakarta");

class Fortuner extends Kendaraan{
    constructor(nama, tahun, warna, pabrik, kota){
        super(nama, tahun, warna);
        this.pabrik = pabrik;
        this.kota = kota;

        this.desc1 = () => {
            return super.desc();
        }
    }
    descDetail(){
        return `${super.desc()} Mobil ini dibuat oleh pabrik ${this.pabrik} asal kota ${this.kota}.`
    }
}
const kendaraan5 = new Fortuner("Fortuner","2021","hitam","PT.FORTUNER","Bandung");


console.log(kendaraan1.descDetail());
console.log(kendaraan2.descDetail());
console.log(kendaraan3.descDetail());
console.log(kendaraan4.descDetail());
console.log(kendaraan5.descDetail());
