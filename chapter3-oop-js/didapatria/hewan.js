class hewan{
    constructor(jenis, nafas){
        this.jenis = jenis;
        this.nafas = nafas;
    }
    intro(){
        return`Hewan ${this.jenis}, bernafas dengan ${this.nafas}`;
    }
}

class darat extends hewan {
    constructor(jenis, makan, nafas, ukuran){
        super(jenis, nafas);
        this.makan = makan;
        this.ukuran = ukuran;
    }
    detail(){
        return `${super.intro()}, Hewan ini memakan ${this.makan}, dan badannya ${this.ukuran}`;
    }
}

const hewan1 = new darat("gajah","rumput","belalai","besar");

class laut extends hewan {
    constructor(jenis, makan, nafas, ukuran){
        super(jenis, nafas);
        this.makan = makan;
        this.ukuran = ukuran;
    }
    detail1(){
        return `${super.intro()}, Hewan ini memakan ${this.makan}, dan badannya ${this.ukuran}`;
    }
}

const hewan2 = new laut("hiu","daging","insang","besar");

class udara extends hewan {
    constructor(jenis, makan, nafas, ukuran){
        super(jenis, nafas);
        this.makan = makan;
        this.ukuran = ukuran;
    }
    detail2(){
        return `${super.intro()}, Hewan ini memakan ${this.makan}, dan badannya ${this.ukuran}`;
    }
}

const hewan3 = new udara("burung","ulat","paru-paru","sedang");

class melatah extends hewan {
    constructor(jenis, makan, nafas, ukuran){
        super(jenis, nafas);
        this.makan = makan;
        this.ukuran = ukuran;
    }
    detail3(){
        return `${super.intro()}, Hewan ini memakan ${this.makan}, dan badannya ${this.ukuran}`;
    }
}

const hewan4 = new melatah("ular","tikus","paru-paru","panjang");

class serangga extends hewan {
    constructor(jenis, makan, nafas, ukuran){
        super(jenis, nafas);
        this.makan = makan;
        this.ukuran = ukuran;
    }
    detail4(){
        return `${super.intro()}, Hewan ini memakan ${this.makan}, dan badannya ${this.ukuran}`;
    }
}

const hewan5 = new serangga("kecoa","apapun","trakea","kecil");



console.log(hewan1.detail());
console.log(hewan2.detail1());
console.log(hewan3.detail2());
console.log(hewan4.detail3());
console.log(hewan5.detail4());