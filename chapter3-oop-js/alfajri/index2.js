class Hewan{
    constructor(nama,energi){
        this.nama = nama;
        this.energi =energi;
    }

    makan(){
        this.energi += 20;
    }

    lari(){
        this.energi -= 10;
        console.log(this.energi);
    }
}

class Kucing extends Hewan{
    constructor(nama,energi,jenis){
        super(nama,energi);
        this.jenis =jenis;
    }

    meong = ()=>{
        console.log(`meow meow ${this.nama}`);
    }
}

class Anjing extends Hewan{
    constructor(nama,energi,jenis){
        super(nama,energi);
        this.jenis =jenis;
    }

    bark = ()=>{
        console.log(`guk guk ${this.nama}`);
    }
}

class Buaya extends Hewan{
    constructor(nama,energi,umur){
        super(nama,energi);
        this.umur =umur;
    }
}

class Gajah extends Hewan{
    constructor(nama,energi,berat){
        super(nama,energi);
        this.berat =berat;
    }
}

class KuraKura extends Hewan{
    constructor(nama,energi,umur){
        super(nama,energi);
        this.umur =umur;
    }
}

let Anggora = new Kucing('anggora',20,'anggora');
let Buldog = new Anjing('buldog',50,'pitbull');
let Aligator = new Buaya('Persia',130,20);
let GajahAfrika = new Gajah('Gajah',50,150);
let Kura = new KuraKura('Hias',10,100);


//console.log(Anggora,Buldog,Aligator,GajahAfrika,Kura)
Anggora.meong();
Buldog.bark();