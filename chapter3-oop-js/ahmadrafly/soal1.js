class Tumbuhan {
  constructor(nama, kelas) {
    this.nama = nama;
    this.kelas = kelas;
  }

  intro() {
    return `Tumbuhan ini memiliki nama ${this.nama} dan termasuk spesise ${this.kelas}`;
  }
}

class Paku extends Tumbuhan {
  constructor(nama, kelas, warnaDaun, jenisAkar) {
    super(nama, kelas);
    this.warnaDaun = warnaDaun;
    this.jenisAkar = jenisAkar;
  }
  karakteristik() {
    return `${super.intro()}. Tumbuhan ini memiliki ciri-ciri daun bewarna ${
      this.warnaDaun
    } dan berakar ${this.jenisAkar}.`;
  }
}

class Padi extends Tumbuhan {
  constructor(nama, kelas, warnaDaun, jenisAkar) {
    super(nama, kelas);
    this.warnaDaun = warnaDaun;
    this.jenisAkar = jenisAkar;
  }
  karakteristik() {
    return `${super.intro()}. Tumbuhan ini memiliki ciri-ciri daun bewarna ${
      this.warnaDaun
    } dan berakar ${this.jenisAkar}.`;
  }
}

class Mangga extends Tumbuhan {
  constructor(nama, kelas, warnaDaun, jenisAkar) {
    super(nama, kelas);
    this.warnaDaun = warnaDaun;
    this.jenisAkar = jenisAkar;
  }
  karakteristik() {
    return `${super.intro()}. Tumbuhan ini memiliki ciri-ciri daun bewarna ${
      this.warnaDaun
    } dan berakar ${this.jenisAkar}.`;
  }
}

class Sakura extends Tumbuhan {
  constructor(nama, kelas, warnaDaun, jenisAkar) {
    super(nama, kelas);
    this.warnaDaun = warnaDaun;
    this.jenisAkar = jenisAkar;
  }
  karakteristik() {
    return `${super.intro()}. Tumbuhan ini memiliki ciri-ciri daun bewarna ${
      this.warnaDaun
    } dan berakar ${this.jenisAkar}.`;
  }
}

class Manggis extends Tumbuhan {
  constructor(nama, kelas, warnaDaun, jenisAkar) {
    super(nama, kelas);
    this.warnaDaun = warnaDaun;
    this.jenisAkar = jenisAkar;
  }
  karakteristik() {
    return `${super.intro()}. Tumbuhan ini memiliki ciri-ciri daun bewarna ${
      this.warnaDaun
    } dan berakar ${this.jenisAkar}.`;
  }
}

const callPaku = new Paku("Paku", "Polypodiophyta", "hijau", "semu");
console.log(callPaku.karakteristik());
