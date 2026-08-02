class Hewan {
  constructor(nama, kaki) {
    this.nama = nama;
    this.kaki = kaki;
  }
  intro() {
    return `Hewan ini bernama ${this.nama}`;
  }
}

class Kucing extends Hewan {
  constructor(nama, kaki, makanan) {
    super(nama, kaki);
    this.makanan = makanan;
  }
  detailHewan() {
    return `${super.intro()} dan suka mencuri ${this.makanan}`;
  }
}

class Anjing extends Hewan {
  constructor(nama, kaki, makanan) {
    super(nama, kaki);
    this.makanan = makanan;
  }
  detailHewan() {
    return `${super.intro()} dan suka mencuri ${this.makanan}`;
  }
}

class Tikus extends Hewan {
  constructor(nama, kaki, makanan) {
    super(nama, kaki);
    this.makanan = makanan;
  }
  detailHewan() {
    return `${super.intro()} dan suka mencuri ${this.makanan}`;
  }
}

class Burung extends Hewan {
  constructor(nama, kaki, makanan) {
    super(nama, kaki);
    this.makanan = makanan;
  }
  detailHewan() {
    return `${super.intro()} dan suka mencuri ${this.makanan}`;
  }
}

class Kancil extends Hewan {
  constructor(nama, kaki, makanan) {
    super(nama, kaki);
    this.makanan = makanan;
  }
  detailHewan() {
    return `${super.intro()} dan suka mencuri ${this.makanan}`;
  }
}

const callKancil = new Kancil("Kancil", 4, "timun");
console.log(callKancil.detailHewan());
