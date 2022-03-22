class Kendaraan{
    constructor(nama,jenis){
        this.nama = nama;
        this.jenis =jenis;
        
    }

    gas(){
        this.kecepatan += 20;
    }

    rem(){
        this.kecepatan -= 10;
        console.log(this.kecepatan);
    }
}

class Motor extends Kendaraan{
    constructor(nama,jenis,kecepatan){
        super(nama,jenis);
        this.kecepatan =kecepatan;
    }
}


class Mobil extends Kendaraan{
    constructor(nama,jenis,kecepatan){
        super(nama,jenis);
        this.kecepatan =kecepatan;
    }
}


class Kereta extends Kendaraan{
    constructor(nama,kecepatan){
        super(nama);
        this.kecepatan =kecepatan;
    }
}


class Kapal extends Kendaraan{
    constructor(nama,jenis,kecepatan){
        super(nama,jenis);
        this.kecepatan =kecepatan;
    }
}

class Pesawat extends Kendaraan{
    constructor(nama,jenis,kecepatan,sayap){
        super(nama,jenis);
        this.kecepatan =kecepatan;
        this.sayap =sayap;
    }
}

let Beat = new Motor('beat','matic',50);
let Avansa = new Mobil('avansa','matic',50);
let LRT = new Kereta('LRT',250);
let Pesiar = new Kendaraan('Pesiar','mewah',150);
let Boing = new Pesawat('Boing 677','penumpang',450,2);


console.log(Boing)