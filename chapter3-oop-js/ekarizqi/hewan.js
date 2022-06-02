class Hewan{
    constructor(nama,ukuran, nafas){
        this.nama = nama;
        this.ukuran = ukuran;
        this.nafas = nafas;
    }
    deskripsi(){
        return`${this.nama} memiliki ukuran tubuh yang ${this.ukuran}. Dia bernafas menggunakan ${this.nafas}`;
    }
}

//turunan 1
class Karnivora extends Hewan{
    constructor(nama, ukuran, nafas, alatMakan){
        super(nama,ukuran, nafas);
        this.alatMakan = alatMakan;
    }
    deskripsi1(){
        return `${super.deskripsi()}. Dia memiliki ${this.alatMakan} yang tajam yang digunakan untuk merobek daging mangsanya.`
    }
}

//turunan 2
class Herbivora extends Hewan{
    constructor(nama,ukuran, nafas, makan){
        super(nama,ukuran, nafas);
        this.makan = makan;
    }
    deskripsi2(){
        return `${super.deskripsi()}. ${this.nama} memakan ${this.makan} untuk bertahan hidup.`
    }
}

//turunan 3
class Omnivora extends Hewan{
    constructor(nama,ukuran, nafas, makan){
        super(nama,ukuran, nafas);
        this.makan = makan;
    }
    deskripsi3(){
        return `${super.deskripsi()}. ${this.nama} memakan ${this.makan}. Oleh karena itu, hewan ini tergolong Omnivora.`
    }
}

//turunan 4
class Ovipar extends Hewan{
    constructor(nama,ukuran, nafas, berkembang){
        super(nama,ukuran, nafas);
        this.berkembang = berkembang;
    }
    deskripsi4(){
        return `${super.deskripsi()}. ${this.nama} berkembang biak dengan cara ${this.berkembang}. `
    }
}

//turunan5
class Serangga extends Hewan{
    constructor(nama,ukuran, nafas, subkelas){
        super(nama,ukuran, nafas,);
        this.subkelas = subkelas;
    }
    deskripsi5(){
        return `${super.deskripsi()}. ${this.nama} termasuk kedalam subkelas ${this.subkelas}.`
    }
}

const turunan1= new Karnivora("Elang", "besar", "paru-paru dan pundi-pundi udara", "paruh");
const turunan2 = new Herbivora("Sapi", "besar", "paru-paru","rumput");
const turunan3 = new Omnivora("Simpanse", "besar", "paru-paru", "buah-buahan dan monyet yang lebih kecil");
const turunan4 = new Ovipar("Ayam", "sedang", "paru-paru", "bertelur");
const turunan5 = new Serangga("Jangkrik", "kecil", "trakea", "Pterygota")

console.log(turunan1.deskripsi1());
console.log(turunan2.deskripsi2());
console.log(turunan3.deskripsi3());
console.log(turunan4.deskripsi4());
console.log(turunan5.deskripsi5());