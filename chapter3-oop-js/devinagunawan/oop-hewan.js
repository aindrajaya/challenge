class Hewan {
    constructor(nama, kaki, alam){
      this.nama = nama;
      this.kaki = kaki;
      this.alam = alam;
    }
    intro() {
        return `${this.nama} memiliki ${this.kaki} kaki dan hidup di ${this.alam}.`
    }
}

class Hewan1 extends Hewan {
    constructor(nama, kaki, alam, jenispemakan, makanan){
      super(nama, kaki, alam); 
      this.makanan = makanan;
      this.jenispemakan = jenispemakan;
      //method
      this.intro = () => {
        return super.intro();
      }
    }
    tambahanPenjelasanHewan(){
        return `${super.intro()} Hewan ini termasuk ${this.jenispemakan} karena memakan ${this.makanan}.`
      }
    }

    const hewanbaru = new Hewan1('Ayam', 'dua', 'darat', 'omnivora', 'biji-bijian, cacing, dan jagung');

    console.log(hewanbaru.tambahanPenjelasanHewan());

class Hewan2 extends Hewan {
    constructor(nama, kaki, alam, mainan, makanan){
      super(nama, kaki, alam); 
      this.makanan = makanan;
      this.mainan = mainan;
      //method
      this.intro2 = () => {
        return super.intro();
      }
    }
    tambahanPenjelasanHewan2(){
        return `${super.intro()} Hewan ini suka bermain ${this.mainan} dan suka makan ${this.makanan}.`
      }
    }

    const hewanbaru2 = new Hewan2('Kucing', 'empat', 'darat', 'tali', 'ikan');

    console.log(hewanbaru2.tambahanPenjelasanHewan2());

class Hewan3 extends Hewan {
    constructor(nama, kaki, alam, habitat1, habitat2){
      super(nama, kaki, alam); 
      this.habitat1 = habitat1;
      this.habitat2 = habitat2;
      //method
      this.intro3 = () => {
        return super.intro();
      }
    }
    tambahanPenjelasanHewan3(){
        return `${super.intro()} Selain itu, hewan ini juga dapat hidup di ${this.habitat1} dan ${this.habitat2}.`
      }
    }

    const hewanbaru3 = new Hewan3('Kura-kura', 'empat', 'darat dan air', 'gurun', 'hutan tropis');

    console.log(hewanbaru3.tambahanPenjelasanHewan3());

class Hewan4 extends Hewan {
    constructor(nama, kaki, alam, negara1, negara2){
      super(nama, kaki, alam); 
      this.negara1 = negara1;
      this.negara2 = negara2;
      //method
      this.intro4 = () => {
        return super.intro();
      }
    }
    tambahanPenjelasanHewan4(){
        return `${super.intro()} Hewan ini umumnya ditemukan di ${this.negara1} dan ${this.negara2}.`
      }
    }

    const hewanbaru4 = new Hewan4('Unta', 'empat', 'wilayah gurun', 'Afrika Utara', 'Timur Tengah');

    console.log(hewanbaru4.tambahanPenjelasanHewan4());

class Hewan5 extends Hewan {
    constructor(nama, kaki, alam, makan1, hasil){
      super(nama, kaki, alam); 
      this.makan1 = makan1;
      this.hasil = hasil;
      //method
      this.intro5 = () => {
        return super.intro();
      }
    }
    tambahanPenjelasanHewan5(){
        return `${super.intro()} Hewan ini memakan ${this.makan1} dan menghasilkan ${this.hasil}.`
      }
    }

    const hewanbaru5 = new Hewan5('Sapi', 'empat', 'darat', 'rumput', 'susu dan daging');

    console.log(hewanbaru5.tambahanPenjelasanHewan5());    