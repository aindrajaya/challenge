class Tumbuhan {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    getterIntroduce() {
        return `The name of this plan is ${this.name}`;
    }

    getterType() {
        return `This type of plant is ${this.type}`;
    }
}

class Dilindungi extends Tumbuhan {
    constructor(name, type, guard) {
        super(name, type);
        this.guard = guard;
    }

    getterGuard() {
        return `Is this plant a protected plant? ${this.guard}`;
    }

    getterResult() {
        return `${super.getterIntroduce()} and this plant is a protected plant.`;
    }
}

class Satwa extends Tumbuhan {
    constructor(name, type, certainly) {
        super(name, type);
        this.certainly = certainly;
    }

    getterCertainly() {
        return `${super.getterIntroduce()} and and is he included in the plant ? ${this.certainly}`;
    }

    setterCertainly() {
        this.certainly = "No";
        return this.certainly;
    }
}

class Warna extends Tumbuhan {
    constructor(name, type, color) {
        super(name, type);
        this.color = color;
    }

    getterColor() {
        return `${super.getterIntroduce()} anda and the color of this plant is ${this.color}`;
    }

    setterColor() {
        this.color = "Blue";
        return this.color;
    }
}

class Diameter extends Tumbuhan {
    constructor(name, type, diameter) {
        super(name, type);
        this.diameter = diameter;
    }

    getterDiameter() {
        return `${super.getterIntroduce()} and the diameter of this plant is ${this.diameter}`;
    }

    setterDiameter() {
        this.diameter = "10m"
        return this.diameter;
    }
}

class Akar extends Tumbuhan {
    constructor(name, type, bentukAkar) {
        super(name, type);
        this.bentukAkar = bentukAkar;
    }

    getterBentukAkar() {
        return `${super.getterIntroduce()} and the shape of the roots of this plant is ${this.bentukAkar}`;
    }

    setterBentukAkar() {
        this.bentukAkar = "ride";
        return this.bentukAkar;
    }
}

// Deklari Variabel Input Properti/Atribute
let bunga = new Tumbuhan("Melati", "Melati Gambir");
let bunga_1 = new Dilindungi("Melati", "Melati Gambir", ["Yes"]);
let bunga_2 = new Satwa("Melati", "Melati Gambir",["Yes"]);
let bunga_3 = new Warna("Melati", "Melati Gambir", ["Red"]);
let bunga_4 = new Diameter("Melati", "Melati Gambir", ["5m"]);
let bunga_5 = new Akar("Melati", "Melati Gambir", ["fiber"]);

// Pemanggilan method/class
console.log(bunga.getterIntroduce());
console.log(bunga.getterType());
console.log(bunga_1.getterGuard());
console.log(bunga_1.getterResult());
console.log(bunga_2.getterCertainly());
console.log(bunga_2.setterCertainly());
console.log(bunga_3.getterColor());
console.log(bunga_3.setterColor());
console.log(bunga_4.getterDiameter());
console.log(bunga_4.setterDiameter());
console.log(bunga_5.getterBentukAkar());
console.log(bunga_5.setterBentukAkar());


