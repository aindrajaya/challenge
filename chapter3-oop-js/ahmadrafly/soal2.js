class Kendaraan {
  constructor(jenis, tahun) {
    this.jenis = jenis;
    this.tahun = tahun;
  }
  intro() {
    return `Jenis kendaraan ini adalah ${this.jenis}`;
  }
}

class Honda extends Kendaraan {
  constructor(jenis, tahun, warna) {
    super(jenis, tahun);
    this.warna = warna;
  }
  karakteristik() {
    return `${super.intro()}. Kendaraan ini keluaran tahun ${
      this.tahun
    } dan memiliki warna ${this.warna}`;
  }
}

class Yamaha extends Kendaraan {
  constructor(jenis, tahun, warna) {
    super(jenis, tahun);
    this.warna = warna;
  }
  karakteristik() {
    return `${super.intro()}. Kendaraan ini keluaran tahun ${
      this.tahun
    } dan memiliki warna ${this.warna}`;
  }
}

class Mitsubisi extends Kendaraan {
  constructor(jenis, tahun, warna) {
    super(jenis, tahun);
    this.warna = warna;
  }
  karakteristik() {
    return `${super.intro()}. Kendaraan ini keluaran tahun ${
      this.tahun
    } dan memiliki warna ${this.warna}`;
  }
}

class Ferari extends Kendaraan {
  constructor(jenis, tahun, warna) {
    super(jenis, tahun);
    this.warna = warna;
  }
  karakteristik() {
    return `${super.intro()}. Kendaraan ini keluaran tahun ${
      this.tahun
    } dan memiliki warna ${this.warna}`;
  }
}

class Lamborgini extends Kendaraan {
  constructor(jenis, tahun, warna) {
    super(jenis, tahun);
    this.warna = warna;
  }
  karakteristik() {
    return `${super.intro()}. Kendaraan ini keluaran tahun ${
      this.tahun
    } dan memiliki warna ${this.warna}`;
  }
}

const callYamaha = new Yamaha("Yamaha", 2018, "hijau");
console.log(callYamaha.karakteristik());
