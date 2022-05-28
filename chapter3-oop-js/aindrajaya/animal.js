// Submission by Jhon Michael Manik

class Animal {
    // parameter
    constructor(sex, age) {
        // properti
        this.sex = sex;
        this.age = age;
    }
    summary() {
        return `Hewan ini berjenis kelamin ${this.sex}, berumur ${this.age} tahun`;
    }
}

class Dog extends Animal {
    constructor(sex, age, weight) {
        super(sex, age);
        this.weight = weight;
    }
    bark() {
        return `${super.summary()} dan memiliki berat ${this.weight} kg`;
    }
}

class Cat extends Animal {
    constructor(sex, age, food) {
        super(sex, age);
        this.food = food;
    }
    snore() {
        return `${super.summary} dan menyukai makan ${this.food}`;
    }
}

class Lion extends Animal {
    constructor(sex, age, numLegs) {
        super(sex, age);
        this.numLegs = numLegs;
    }
    roar() {
        return `${super.summary} dan memiliki ${this.numLegs} kaki`;
    }
}

class Cow extends Animal {
    constructor(sex, age, family) {
        super(sex, age);
        this.family = family;
    }
    moo() {
        return `${super.summary} dan berasal dari famili ${this.family}`;
    }
}

class Monkey extends Animal {
    constructor(sex, age, tail) {
        super(sex, age);
        this.tail = tail;
    }
    sound() {
        return `${super.summary} dan memiliki ${this.tail} ekor`;
    }
}

const dog1 = new Dog('male', 2, 20);
console.log(dog1.bark());