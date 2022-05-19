//Parent atau Class
class Kendaraan {
    constructor(nama, merek, tahun) {
        //Property
        this.nama = nama;
        this.merek = merek;
        this.tahun = tahun;
    }
    mobil() {
        return `Ini merupakan mobil ${this.nama} dari merek ${this.merek}, mobil ini keluar tahun ${this.tahun}`
    }
}

//Turunan 1
class Honda extends Kendaraan {
    constructor(nama, merek, tahun, type, kapasitas) {
        super(nama, merek, tahun);
        this.type = type;
        this.kapasitas = kapasitas;
    }

    honda() {
        return `${super.mobil()}. mobil ini masuk type ${this.type} dengan kapasitas penumpang ${this.kapasitas} kursi.`
    }
}
//Turunan 2
class Toyota extends Kendaraan {
    constructor(nama, merek, tahun, type, kapasitas) {
        super(nama, merek, tahun);
        this.type = type;
        this.kapasitas = kapasitas;
    }

    toyota() {
        return `${super.mobil()}. mobil ini masuk type ${this.type} dengan kapasitas penumpang ${this.kapasitas} kursi.`
    }
}
//Turunan 3
class Suzuki extends Kendaraan {
    constructor(nama, merek, tahun, type, kapasitas) {
        super(nama, merek, tahun);
        this.type = type;
        this.kapasitas = kapasitas;
    }

    suzuki() {
        return `${super.mobil()}. mobil ini masuk type ${this.type} dengan kapasitas penumpang ${this.kapasitas} kursi.`
    }
}
//Turunan 4
class Mitshubishi extends Kendaraan {
    constructor(nama, merek, tahun, type, kapasitas) {
        super(nama, merek, tahun);
        this.type = type;
        this.kapasitas = kapasitas;
    }

    mitshubishi() {
        return `${super.mobil()}. mobil ini masuk type ${this.type} dengan kapasitas penumpang ${this.kapasitas} kursi.`
    }
}
//Turunan 5
class Daihatsu extends Kendaraan {
    constructor(nama, merek, tahun, type, kapasitas) {
        super(nama, merek, tahun);
        this.type = type;
        this.kapasitas = kapasitas;
    }

    daihatsu() {
        return `${super.mobil()}. mobil ini masuk type ${this.type} dengan kapasitas penumpang ${this.kapasitas} kursi.`
    }
}

const mobil1 = new Honda("Civic type R", "Honda", 2017, "Sport", 5);
const mobil2 = new Toyota("Fortuner", "Toyota", 2021, "SUV", 7);
const mobil3 = new Suzuki("Ertiga", "Suzuki", 2018, "MPV", 7);
const mobil4 = new Mitshubishi("Pajero Sport", "Mitshubishi", 2015, "SUV", 7);
const mobil5 = new Daihatsu("Luxio", "Daihatsu", 2017, "Van", 8);

console.log(mobil1.honda());
console.log(mobil2.toyota());
console.log(mobil3.suzuki());
console.log(mobil4.mitshubishi());
console.log(mobil5.daihatsu());