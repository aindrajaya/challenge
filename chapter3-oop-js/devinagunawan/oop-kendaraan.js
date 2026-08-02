class Kendaraan {
    constructor(nama, roda, tenaga){
      this.nama = nama;
      this.roda = roda;
      this.tenaga = tenaga;
    }
    intro() {
        return `${this.nama} memiliki ${this.roda} roda dan digerakan menggunakan ${this.tenaga}.`
    }
}
class Kendaraan1 extends Kendaraan {
    constructor(nama, roda, tenaga, fungsi, keuntungan){
      super(nama, roda, tenaga); 
      this.fungsi = fungsi;
      this.keuntungan = keuntungan;
      //method
      this.intro = () => {
        return super.intro();
      }
    }
    tambahanPenjelasanKendaraan(){
        return `${super.intro()} Kendaraan ini sering digunakan untuk ${this.fungsi}, selain itu juga ${this.keuntungan}.`
      }
    }

    const kendaraanbaru = new Kendaraan1('Sepeda', 'dua', 'tenaga manusia', 'berpergian dengan jarak yang dekat', 'mengurangi polusi udara');

    console.log(kendaraanbaru.tambahanPenjelasanKendaraan());

class Kendaraan2 extends Kendaraan {
    constructor(nama, roda, tenaga, tranportasi, daerah){
      super(nama, roda, tenaga); 
      this.tranportasi = tranportasi;
      this.daerah = daerah;
      //method
      this.intro = () => {
        return super.intro();
      }
    }
    tambahanPenjelasanKendaraan2(){
        return `${super.intro()} Kendaraan ini merupakan salah satu ${this.tranportasi} dan banyak ditemukan di daerah ${this.daerah}.`
      }
    }

    const kendaraanbaru2 = new Kendaraan2('Delman', 'dua', 'tenaga kuda', 'kendaraan tradisional', 'Solo dan Yogya');

    console.log(kendaraanbaru2.tambahanPenjelasanKendaraan2());

class Kendaraan3 extends Kendaraan {
    constructor(nama, roda, tenaga, negara1, negara2){
      super(nama, roda, tenaga); 
      this.negara1 = negara1;
      this.negara2 = negara2;
      //method
      this.intro = () => {
        return super.intro();
      }
    }
    tambahanPenjelasanKendaraan3(){
        return `${super.intro()} Selain di ${this.negara1}, kendaraan ini juga banyak ditemukan di negara ${this.negara2}.`
      }
    }

    const kendaraanbaru3 = new Kendaraan3('Becak', 'tiga', 'tenaga manusia', 'Indonesia', 'India, Vietnam, dan Malaysia');

    console.log(kendaraanbaru3.tambahanPenjelasanKendaraan3());

class Kendaraan4 extends Kendaraan {
    constructor(nama, roda, tenaga, ciri, warna){
      super(nama, roda, tenaga); 
      this.ciri = ciri;
      this.warna = warna;
      //method
      this.intro = () => {
        return super.intro();
      }
    }
    tambahanPenjelasanKendaraan4(){
        return `${super.intro()} Kendaraan ini memiliki ciri khas ${this.ciri} dan biasa dijumpai dengan warna ${this.warna}.`
      }
    }

    const kendaraanbaru4 = new Kendaraan4('Bajaj', 'tiga', 'tenaga mesin', 'suara yang berisik', 'merah atau biru');

    console.log(kendaraanbaru4.tambahanPenjelasanKendaraan4());

class Kendaraan5 extends Kendaraan {
    constructor(nama, roda, tenaga, kapasitas, syarat){
      super(nama, roda, tenaga); 
      this.kapasitas = kapasitas;
      this.syarat = syarat;
      //method
      this.intro = () => {
        return super.intro();
      }
    }
    tambahanPenjelasanKendaraan5(){
        return `${super.intro()} Kapasitas kendaraan ini mencapai ${this.kapasitas} orang bergantung jenisnya. Syarat untuk mengemudi kendaraan ini adalah memiliki ${this.syarat}.`
      }
    }

    const kendaraanbaru5 = new Kendaraan5('Mobil', 'empat', 'tenaga mesin', '4-8', 'sim A');

    console.log(kendaraanbaru5.tambahanPenjelasanKendaraan5());