class Tumbuhan {
  constructor(name, type) {
      this.name = name;
      this.type = type;
  }

  getterIntroduce() {
      return `The name of this plan is ${this.name}`;
  }

  getterType() {
      return `This type of plant is ${this.type}`;
  }
}

class Dilindungi extends Tumbuhan {
  constructor(name, type, guard) {
      super(name, type);
      this.guard = guard;
  }

  getterGuard() {
      return `Is this plant a protected plant? ${this.guard}`;
  }

  getterResult() {
      return `${super.getterIntroduce()} and this plant is a protected plant.`;
  }
}

class Satwa extends Tumbuhan {
  constructor(name, type, certainly) {
      super(name, type);
      this.certainly = certainly;
  }

  getterCertainly() {
      return `${super.getterIntroduce()} and and is he included in the plant ? ${this.certainly}`;
  }

  setterCertainly() {
      this.certainly = "No";
      return this.certainly;
  }
}

class Warna extends Tumbuhan {
  constructor(name, type, color) {
      super(name, type);
      this.color = color;
  }

  getterColor() {
      return `${super.getterIntroduce()} anda and the color of this plant is ${this.color}`;
  }

  setterColor() {
      this.color = "Blue";
      return this.color;
  }
}

class Diameter extends Tumbuhan {
  constructor(name, type, diameter) {
      super(name, type);
      this.diameter = diameter;
  }

  getterDiameter() {
      return `${super.getterIntroduce()} and the diameter of this plant is ${this.diameter}`;
  }

  setterDiameter() {
      this.diameter = "10m"
      return this.diameter;
  }
}

class Akar extends Tumbuhan {
  constructor(name, type, bentukAkar) {
      super(name, type);
      this.bentukAkar = bentukAkar;
  }

  getterBentukAkar() {
      return `${super.getterIntroduce()} and the shape of the roots of this plant is ${this.bentukAkar}`;
  }

  setterBentukAkar() {
      this.bentukAkar = "ride";
      return this.bentukAkar;
  }
}

// Deklari Variabel Input Properti/Atribute
let bunga = new Tumbuhan("Melati", "Melati Gambir");
let bunga_1 = new Dilindungi("Melati", "Melati Gambir", ["Yes"]);
let bunga_2 = new Satwa("Melati", "Melati Gambir",["Yes"]);
let bunga_3 = new Warna("Melati", "Melati Gambir", ["Red"]);
let bunga_4 = new Diameter("Melati", "Melati Gambir", ["5m"]);
let bunga_5 = new Akar("Melati", "Melati Gambir", ["fiber"]);

// Pemanggilan method/class
console.log(bunga.getterIntroduce());
console.log(bunga.getterType());
console.log(bunga_1.getterGuard());
console.log(bunga_1.getterResult());
console.log(bunga_2.getterCertainly());
console.log(bunga_2.setterCertainly());
console.log(bunga_3.getterColor());
console.log(bunga_3.setterColor());
console.log(bunga_4.getterDiameter());
console.log(bunga_4.setterDiameter());
console.log(bunga_5.getterBentukAkar());
console.log(bunga_5.setterBentukAkar());

class Kendaraan {
  constructor(merk, kecepatan, jenis) {
    this.merk = merk;
    this.kecepatan = kecepatan;
    this.jenis = jenis;
  }
  intro() {
    return `Kendaraan ini bermerk ${this.merk} dengan kecepatan ${this.kecepatan} berjenis ${this.jenis}`;
  }
}

class Motor extends Kendaraan{
  constructor(merk, kecepatan, jenis, roda){
    super(merk, kecepatan, jenis);
    this.roda = roda;
  }
  getMotor() {
    return `${super.intro()} dan memiliki ${this.roda} roda`;
  }
}

class Mobil extends Kendaraan{
  constructor(merk, kecepatan, jenis, roda){
    super(merk, kecepatan, jenis);
    this.roda = roda;
  }
  getMobil() {
    return `${super.intro()} dan memiliki ${this.roda} roda`;
  }
}

class Bus extends Kendaraan{
  constructor(merk, kecepatan, jenis, roda){
    super(merk, kecepatan, jenis);
    this.roda = roda;
  }
  getBus() {
    return `${super.intro()} dan memiliki ${this.roda} roda`;
  }
}

class Truk extends Kendaraan{
  constructor(merk, kecepatan, jenis, roda){
    super(merk, kecepatan, jenis);
    this.roda = roda;
  }
  getTruk() {
    return `${super.intro()} dan memiliki ${this.roda} roda`;
  }
}

class Pesawat extends Kendaraan{
  constructor(merk, kecepatan, jenis, roda){
    super(merk, kecepatan, jenis);
    this.roda = roda;
  }
  getPesawat() {
    return `${super.intro()} dan memiliki ${this.roda} roda`;
  }
}

let trans1 = new Motor("Honda", "60 km/jam", "Motor", "2");
let trans2 = new Mobil("Suzuki", "180 km/jam", "Mobil", "4");
let trans3 = new Bus("Mercedes-Benz", "200 km/jam", "Bus", "4");
let trans4 = new Truk("Mitsubishi", "70 km/jam", "Truk", "6");
let trans5 = new Pesawat("Boeing", "550 km/jam", "Motor", "6");

console.log();
console.log(trans1.getMotor());
console.log(trans2.getMobil());
console.log(trans3.getBus());
console.log(trans4.getTruk());
console.log(trans5.getPesawat());
console.log();

class Animal {
  constructor(name,type,weight) {
    this.name = name;
    this.type = type;
    this.weight = weight;
  }
  description() {
    return `Hewan ini namanya ${this.name} berjenis ${this.type} dengan berat sebesar ${this.weight}`;
  }
}

class Bird extends Animal {
  constructor(name,type,weight,ability){
    super(name,type,weight);
    this.ability = ability;
  }
  descDetail() {
    return `${super.description()} dan berkemampuan untuk ${this.ability}`;
  }
}

class Fish extends Animal {
  constructor(name,type,weight,gender) {
    super(name,type,weight);
    this.gender = gender;
  }
  detailKeterangan() {
    return `${super.description()} dan berjenis kelamin ${this.gender}`;
  }
}

class Reptile extends Animal {
  constructor(name,type,weight,reproduction) {
    super(name,type,weight);
    this.reproduction = reproduction;
  }
  detailPenjelasan() {
    return `${super.description()} dan bereproduksi dengan cara ${this.reproduction}`;
  }
}

class Mammal extends Animal {
  constructor(name,type,weight,age) {
    super(name,type,weight);
    this.age = age;
  }
  explanationDetail() {
    return `${super.description()} dan berumur ${this.age} tahun`;
  }
}

class Amphibi extends Animal {
  constructor(name,type,weight,eat) {
    super(name,type,weight);
    this.eat = eat;
  }
  detailPernyataan() {
    return `${super.description()} dan memakan ${this.eat}`;
  }
}

const hewan1 = new Bird("merpati","burung peliharaan","1kg","terbang");
const hewan2 = new Fish("Ikan Koi", "ikan hias", "1kg", "jantan");
const hewan3 = new Reptile("Buaya","reptil","5kg","ovipar");
const hewan4 = new Mammal("Kucing", "hewan peliharaan", "2kg","2");
const hewan5 = new Amphibi("Katak", "amfibi", "1kg", "jangkrik");

console.log(hewan1.descDetail());
console.log(hewan2.detailKeterangan());
console.log(hewan3.detailPenjelasan());
console.log(hewan4.explanationDetail());
console.log(hewan5.detailPernyataan());