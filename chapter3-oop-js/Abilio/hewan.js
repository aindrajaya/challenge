class Hewan {
  constructor(nama, kaki, berat) {
    this.nama = nama;
    this.kaki = kaki;
    this.berat = berat;
  }
  cetakHewan() {
    return `${this.nama} memiliki ${this.kaki} kaki dan memiliki berat ${this.berat} kg`;
  }
}

class Golongan extends Hewan {
  constructor(nama, kaki, berat, makanan, jenis) {
    super(nama, kaki, berat);
    this.makanan = makanan;
    this.jenis = jenis;
  }
  penjelasan() {
    return `${super.cetakHewan()} dan makanannya adalah ${
      this.makanan
    } maka jenisnya adalah ${this.jenis}`;
  }
}


class Habitat extends Hewan {
  constructor(nama, kaki, berat, habitat,bernafas) {
    super(nama, kaki, berat);
    this.habitat = habitat;
    this.bernafas = bernafas;
  }
  penjelasan() {
    return `${super.cetakHewan()} dan habitatnya adalah ${this.habitat} untuk bernafas menggunakan ${this.bernafas}`;
  }
}


class BerkembangBiak extends Hewan {
  constructor(nama, kaki, berat, caraBerkembangBiak, jenis) {
    super(nama, kaki, berat);
    this.caraBerkembangBiak = caraBerkembangBiak;
    this.jenis = jenis;

  }
  penjelasan() {
    return `${super.cetakHewan()} dan cara berkembang biaknya adalah ${
      this.caraBerkembangBiak
    } dan jenisnya adalah ${this.jenis}`;
  }
}

// Panggil
console.log("========= Class Golongan Hewan ========");
const hewan1 = new Golongan("Singa", 4, 50, "daging", "karnivora");
const hewan2 = new Golongan("Kelinci", 4, 2, "Sayur dan buah", "Herbivora");
const hewan3 = new Golongan(
  "Anjing",
  4,
  5,
  "Daging,sayur dan buah",
  "Omnivora"
);
console.log(hewan1.penjelasan());
console.log(hewan2.penjelasan());
console.log(hewan3.penjelasan());
console.log("\n");


console.log("========= Class Habitat Hewan ========");
const hewan4 = new Habitat("Penyu", 4, 3, "Darat dan laut","Paru-paru");
const hewan5 = new Habitat("Singa", 4, 50, "Darat","Paru-paru");
const hewan6 = new Habitat("Anjing", 4, 5, "Darat","Paru-paru");
console.log(hewan4.penjelasan());
console.log(hewan5.penjelasan());
console.log(hewan6.penjelasan());
console.log("\n");


console.log("========= Class Berkembangbiak Hewan ========");
const hewan7 = new BerkembangBiak("Anjing", 4, 5, "Melahirkan", "Vivipar");
const hewan8 = new BerkembangBiak("Ayam", 2, 1, "Bertelur", "Ovipar");
const hewan9 = new BerkembangBiak(
  "Iguana",
  "4",
  5,
  "Bertelur dan Melahirkan",
  "Ovivipar"
);
console.log(hewan7.penjelasan());
console.log(hewan8.penjelasan());
console.log(hewan9.penjelasan());
