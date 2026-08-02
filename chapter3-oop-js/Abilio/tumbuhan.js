class Tumbuhan {
    constructor(nama,tinggi,warna){
        this.nama = nama;
        this.tinggi = tinggi;
        this.warna = warna;
    }

    cetakTumbuhan(){
        return `${this.nama} memiliki tinggi ${this.tinggi} cm dan warna bunga ${this.warna}`;
    }
}

class Jenis extends Tumbuhan{
    constructor(nama,tinggi,warna,jenis,genus){
        super(nama,tinggi,warna);
        this.jenis = jenis;
        this.genus = genus;
    }
    penjelasan(){
        return `${super.cetakTumbuhan()} dan jenisnya adalah ${this.jenis} dan genusnya adalah ${this.genus}`;
    }
}

class Klasifikasi extends Tumbuhan{
    constructor(nama,tinggi,warna,Kerajaan,Divisi,Ordo){
        super(nama,tinggi,warna);
        this.Kerajaan = Kerajaan;
        this.Divisi = Divisi;
        this.Ordo = Ordo;
    }
    penjelasan(){
        return `${super.cetakTumbuhan()} dan klasifikasi ilmiahnya adalah\nKerajaan:${this.Kerajaan}\nDivisi:${this.Divisi}\nOrdo:${this.Ordo}\n`;
    }
}

class Hidup extends Tumbuhan{
    constructor(nama,tinggi,warna,Hidup,akar){
        super(nama,tinggi,warna);
        this.Hidup = Hidup;
        this.akar = akar;
    }
    penjelasan(){
        return `${super.cetakTumbuhan()} tumbuh subur di ${this.Hidup} dan memiliki akar ${this.akar}`;
    }
}

console.log("========= Class Jenis Tumbuhan ========");
const tumbuhan1 = new Jenis("Mawar",10,"Merah","tanaman semak","Rosa");
const tumbuhan2 = new Jenis("Melati",20,"putih","tanaman semak merambat","Oleaceae");
console.log(tumbuhan1.penjelasan());
console.log(tumbuhan2.penjelasan());
console.log("\n");

// (nama,tinggi,warna,Kerajaan,Divisi,Ordo)
console.log("========= Class Klasifikasi Tumbuhan ========");
const tumbuhan3 = new Klasifikasi("Mawar",10,"Merah","Plantae","Magnoliophyta","Rosales");
const tumbuhan4 = new Klasifikasi("Melati",10,"Putih","Plantae","Magnoliophyta","Lamiales");
console.log(tumbuhan3.penjelasan());
console.log(tumbuhan4.penjelasan());
console.log("\n");

//(nama,tinggi,warna,Hidup,akar)
console.log("========= Class Hidup Tumbuhan ========");
const tumbuhan5 = new Hidup("Mawar",10,"Merah","Beriklim Sedang","Serabut");
const tumbuhan6 = new Hidup("Melati",10,"Putih","Beriklim Sedang","Tunggang");
console.log(tumbuhan5.penjelasan());
console.log(tumbuhan6.penjelasan());
