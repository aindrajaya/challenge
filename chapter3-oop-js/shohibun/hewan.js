//Parent atau class
class Animal {
  constructor(name,type,weight) {
    //property
    this.name = name;
    this.type = type;
    this.weight = weight;
  }
  description() {
    return `Hewan ini namanya ${this.name} berjenis ${this.type} dengan berat sebesar ${this.weight}`;
  }
}

//sub-class
class Bird extends Animal {
  constructor(name,type,weight,ability){
    super(name,type,weight);
    this.ability = ability;
    this.desc = () => {
      return super.description();
    }
  }
  descDetail() {
    return `${super.description()} dan berkemampuan untuk ${this.ability}`;
  }
}

class Fish extends Animal {
  constructor(name,type,weight,gender) {
    super(name,type,weight);
    this.gender = gender;
    this.keterangan = () => {
      return super.description();
    }
  }
  detailKeterangan() {
    return `${super.description()} dan berjenis kelamin ${this.gender}`;
  }
}

class Reptile extends Animal {
  constructor(name,type,weight,reproduction) {
    super(name,type,weight);
    this.reproduction = reproduction;
    this.penjelasan = () => {
      return super.description();
    }
  }
  detailPenjelasan() {
    return `${super.description()} dan bereproduksi dengan cara ${this.reproduction}`;
  }
}

class Mammal extends Animal {
  constructor(name,type,weight,age) {
    super(name,type,weight);
    this.age = age;
    this.explanation = () => {
      return super.description();
    }
  }
  explanationDetail() {
    return `${super.description()} dan berumur ${this.age} tahun`;
  }
}

class Amphibi extends Animal {
  constructor(name,type,weight,eat) {
    super(name,type,weight);
    this.eat = eat;
    this.pernyataan = () => {
      return super.description();
    }
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