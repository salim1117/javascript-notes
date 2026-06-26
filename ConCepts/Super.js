
class Animal {
    constructor(name){
        this.name = name;
    }
}
class Dog extends Animal {
    
    constructor(name,age){
        super(name);
        this.age= age;
    }
    details(){
        console.log(`${this.name} is ${this.age} years old`);
    }
}

let d = new Dog("T",2);
d.details();



// 2. Calling Parent Methods using super

class Animal {

    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {

    eat() {

        // Calling Parent Method
        super.eat();

        console.log("Dog is eating bones");
    }
}

const d1 = new Dog();

d1.eat();



// Real Interview Example
class Product {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    display() {
        console.log(`${this.name} costs ₹${this.price}`);
    }
}

class Mobile extends Product {

    constructor(name, price, brand) {

        super(name, price);

        this.brand = brand;
    }

    display() {

        super.display();

        console.log(`Brand: ${this.brand}`);
    }
}

const m1 = new Mobile(
    "Galaxy S25",
    80000,
    "Samsung"
);

m1.display();