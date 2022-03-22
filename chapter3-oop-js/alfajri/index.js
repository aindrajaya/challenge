class Tumbuhan{
    constructor(nama,jenis,tinggi){
        this.nama = nama;
        this.jenis =jenis;
        this.tinggi =tinggi;
    }

    siram(){
        this.tinggi += 1;
        console.log(this.tinggi);
    }
}

class Pisang extends Tumbuhan{
    constructor(nama,jenis,tinggi,akar){
        super(nama,jenis,tinggi);
        this.akar = akar;
        
    }

    tumbuh = ()=>{
        this.siram();
    }

    
}

class Anggur extends Tumbuhan{
    constructor(nama,jenis,tinggi,akar){
        super(nama,jenis,tinggi);
        this.akar = akar;
    }
}

class Durian extends Tumbuhan{
    constructor(nama,jenis,tinggi,akar){
        super(nama,jenis,tinggi);
        this.akar = akar;
    }

}

class Mangga extends Tumbuhan{
    constructor(nama,jenis,tinggi,akar){
        super(nama,jenis,tinggi);
        this.akar = akar;
    }
}

class Rambutan extends Tumbuhan{
    constructor(nama,jenis,tinggi,akar){
        super(nama,jenis,tinggi);
        this.akar = akar;
    }
}

let Pisangs = new Pisang('pisang','buah',20,'serabut');
let Anggurs = new Anggur('Anggur','buah',12,'serabut');
let Durians = new Durian('Durian','buah',25,'serabut');
let Manggas = new Mangga('Mangga','buah',22,'serabut');
let Rambutans = new Rambutan('Rambutan','buah',12,'serabut');

console.log(Pisangs.tumbuh);
Pisangs.tumbuh();
