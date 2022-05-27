// 1. Buat suatu turunan dari Object Tumbuhan (5 Jenis, minimal property 3)
class Tumbuhan {
    constructor(nama, warna, ordo){
      this.nama = nama;
      this.warna = warna;
      this.ordo = ordo;
    }
    intro() {
        return `${this.nama} dengan kelopak ${this.warna} memiliki ordo ${this.ordo}.`
    }
}

class Tumbuhan1 extends Tumbuhan {
    constructor(nama, warna, ordo, diameter, tinggi){
      super(nama, warna, ordo); 
      this.diameter = diameter;
      this.tinggi = tinggi;
      //method
      this.intro2 = () => {
        return super.intro();
      }
    }
    tambahanPenjelasanTumbuhan(){
        return `${super.intro()} Tumbuhan ini memiliki diameter bunga mekar sebesar ${this.diameter} dan tinggi tangkainya adalah ${this.tinggi}.`
      }
    }

    const tumbuhanbaru = new Tumbuhan1('Bunga mawar', 'merah', 'Rosales', '8 cm', '15 cm');

    console.log(tumbuhanbaru.tambahanPenjelasanTumbuhan());

class Tumbuhan2 extends Tumbuhan {
    constructor(nama, warna, ordo, genus, spesies){
        super(nama, warna, ordo); 
        this.spesies = spesies;
        this.genus = genus;
        //method
        this.intro2 = () => {
        return super.intro();
        }
    }
    tambahanPenjelasanTumbuhan(){
        return `${super.intro()} Genus tumbuhan ini adalah ${this.genus} dan nama spesies tumbuhan ini adalah ${this.spesies}.`
        }
    }

    const tumbuhanbaru2 = new Tumbuhan2('Bunga melati', 'putih', 'Oleales', 'Jasminum', 'Jasminum sambac');

    console.log(tumbuhanbaru2.tambahanPenjelasanTumbuhan());


class Tumbuhan3 extends Tumbuhan {
constructor(nama, warna, ordo, negara, lambang){
    super(nama, warna, ordo); 
    this.negara = negara;
    this.lambang = lambang;
    //method
    this.intro3 = () => {
    return super.intro();
    }
}
tambahanPenjelasanTumbuhan(){
    return `${super.intro()} Tumbuhan ini banyak ditemukan di negara ${this.negara} dan tumbuhan ini melambangkan ${this.lambang}.`
    }
}

const tumbuhanbaru3 = new Tumbuhan3('Bunga tulip', 'kuning', 'Liliales', 'Belanda', 'persahabatan');

console.log(tumbuhanbaru3.tambahanPenjelasanTumbuhan());

class Tumbuhan4 extends Tumbuhan {
    constructor(nama, warna, ordo, jenis, akar){
        super(nama, warna, ordo); 
        this.jenis = jenis;
        this.akar = akar;
        //method
        this.intro4 = () => {
        return super.intro();
        }
    }
    tambahanPenjelasanTumbuhan(){
        return `${super.intro()} Tumbuhan ini terdapat 2 jenis yaitu ${this.jenis}. Akar pada tumbuhan ini memiliki panjang ${this.akar} di dalam tanah, sehingga dapat tumbuh kokoh dengan ketinggian 5 m.`
        }
    }

    const tumbuhanbaru4 = new Tumbuhan4('Bunga matahari', 'kuning terang', 'Asterales', 'bunga tepi dan bunga tabung', '3-4 m');

    console.log(tumbuhanbaru4.tambahanPenjelasanTumbuhan());

class Tumbuhan5 extends Tumbuhan {
    constructor(nama, warna, ordo, namalain, fungsi){
        super(nama, warna, ordo); 
        this.namalain = namalain;
        this.fungsi = fungsi;
        //method
        this.intro5 = () => {
        return super.intro();
        }
    }
    tambahanPenjelasanTumbuhan(){
        return `${super.intro()} Tumbuhan ini juga dikenal dengan nama ${this.namalain} dan biasa digunakan sebagai ${this.fungsi} untuk makanan.`
        }
    }

    const tumbuhanbaru5 = new Tumbuhan5('Bunga kembang sepatu', 'pink atau merah cerah', 'Malvales', 'Hibiscus', 'pewarna alami');

    console.log(tumbuhanbaru5.tambahanPenjelasanTumbuhan());