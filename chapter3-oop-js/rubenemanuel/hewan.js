class Animal {
    constructor(gender, age, weight) {
        this.gender = gender;
        this.age = age;
        this.weight = weight;
    }

    sleep() {
        return sleep;
    }
    eat() {
        return eat;
    }
    move() {
        return move;
    }

    intro() {
        return `${this.gender} | ${this.age} | ${this.weight}`
    }
}

class Bird extends Animal {
    constructor(name, gender, age, weight) {
        super(gender, age, weight);
        this.name = name;
    }

    fly() {
        return `not birds fly;`
    }

    birdDetail() {
        return `${this.name}
  ${super.intro()}
  
  ${this.name}s ${super.sleep()} during the day (nocturnal), ${super.eat()} seeds, berries, fruit, insects, other birds, eggs, small mammals, fish, buds, larvae, aquatic invertebrates, acorns and other nuts, aquatic vegetation, grain, dead animals, garbage, and much more, ${super.move()} ${this.fly()}`
    }
}

class Chicken extends Bird {
    constructor(name, gender, age, weight) {
        super(name, gender, age, weight);
    }

    chickenFly() {
        return `don't fly`;
    }

    chickenDetail() {
        return `${super.birdDetail()} but ${super.name} ${this.chickenFly()}.`
    }
}

class Eagle extends Bird {
    constructor(name, gender, age, weight) {
        super(name, gender, age, weight);
    }

    eagleFly() {
        return `can sour high`;
    }

    eagleDetail() {
        return `${super.birdDetail()} but ${super.name} ${this.eagleFly()}.`
    }
}

class Reptile extends Animal {
    constructor(name, gender, age, weight) {
        super(gender, age, weight);
        this.name = name;
    }

    leap() {
        return leap;
    }

    reptileDetail() {
        return `${this.name}
  ${super.intro()}
  
  ${this.name}s ${super.sleep()} during the day (nocturnal), ${super.eat()} such as insects, mollusks, birds, frogs, mammals, fishes, or even other ${this.name}s, ${super.move()} slither and can ${this.leap()}.`
    }
}

class Fish extends Animal {
    constructor(name, gender, age, weight) {
        super(gender, age, weight);
        this.name = name;
    }

    swim() {
        return swim;
    }

    fishDetail() {
        return `${this.name}
  ${super.intro()}
  
  ${this.name}s ${super.sleep()} at night, ${super.eat()} insects, worms, or smaller fish, ${super.move()} by ${this.swim()}.`
    }
}

const chicken = new Chicken('Chicken', 'female', '1yr', '1kg');
const eagle = new Eagle('Eagle', 'female', '2yrs', '2kg');
const frog = new Reptile('Frog', 'male', '1yr', '1kg');
const shark = new Fish('Shark', 'male', '3yrs', '150kg');

console.log(chicken.chickenDetail());
console.log('');
console.log(eagle.eagleDetail());
console.log('');
console.log(frog.reptileDetail());
console.log('');
console.log(shark.fishDetail());