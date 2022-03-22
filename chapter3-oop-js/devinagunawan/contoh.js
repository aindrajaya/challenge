// const name = "Suzuki";
//Object - biasa
// const car = {
  //property
//   name: "toyota",
//   year: 2009,
//   color: 'blue',
  //Method
//   haveADescription : function(){
//     return `This car from ${this.name} create on year ${this.year} with color ${this.color}`;
//   }
// }

//Blueprint sebuah object
// function Kendaraan(nama, tahun, warna){
//   this.nama = nama;
//   this.tahun = tahun;
//   this.warna = warna;
  //Method
//   this.deklarasi = () => {
//     return `Kendaraan ini mempunyai merk bernama ${this.nama} dibuat pada tahun ${this.tahun} dengan warna ${this.warna}`
//   }
// }

//Cara memakai - jeep, 2020, hitam
// const Jeep = new Kendaraan('jeep', 2020, 'hitam');

// console.log(Jeep.deklarasi());

class Pohon {
  //Penulisan parameter di class
  constructor(nama, bentukAkar){
    //Penulisan property di class
    this.nama = nama;
    this.bentukAkar = bentukAkar;
  }

  //ES5 - method
  penjelasan(){
      return `Pohon ini adalah pohon ${this.nama} dan mempunyai bentuk akar ${this.bentukAkar}`;
    }
}

//Inheritance
class Trembesi extends Pohon {
  constructor(nama, bentukAkar, diamater, tinggi){
    super(nama, bentukAkar); //DRY
    this.diameter = diamater;
    this.tinggi = tinggi;
    this.deklarasi = () => {
      return super.penjelasan();
    }
  }

  penjelasanDetail(){
    return `${super.penjelasan()} dan berdiameter ${this.diameter} dan tingginya adalah ${this.tinggi}`
  }
}

const pohon1 = new Trembesi("trembesi ujungkulon", "tunggang", '4 meter', '10 meter');

console.log(pohon1.penjelasanDetail());