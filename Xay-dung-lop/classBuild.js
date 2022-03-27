class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(newName) {
        this.name = newName;
    }
    
    setWeight(newWeight) {
        this.weight = newWeight;
    }

    getName() {
        return this.name;
    }

    toString() {
        return `This animal is ${this.name}. Its weight is ${this.weight}.`;
    }
}

let objAnimal1 = new Animal('Elephant', 45.6);
console.log(objAnimal1.toString());

let objAnimal2 = new Animal('Dog', 35);
objAnimal2.setName('Mouse');