/*
=========================================
INHERITANCE IN JAVASCRIPT
=========================================

Definition:
Inheritance is an OOP concept that allows a child class
to acquire properties and methods from a parent class.

Advantages:
1. Code Reusability
2. Better Code Organization
3. Easy Maintenance
4. Supports Polymorphism

Keyword Used:
extends

Interview Question:
Q: What is inheritance?
A: Inheritance is a mechanism through which one class
can acquire properties and methods of another class.
*/

class Animal {

    // Constructor initializes object properties
    constructor(name) {
        this.name = name;
    }

    // Common behavior shared by all animals
    eat() {
        console.log(`${this.name} is eating`);
    }
}

/*
Dog inherits Animal.

Interview Question:
Q: Which type of inheritance is this?
A: Single Inheritance

Animal
   │
   ▼
  Dog
*/

class Dog extends Animal {

    bark() {
        console.log(`${this.name} is barking`);
    }
}

const dog1 = new Dog("Tommy");

dog1.eat();   // inherited method
dog1.bark();  // own method




// CUNSTRUCTOR SUPER 
/*
=========================================
SUPER KEYWORD
=========================================

Definition:
super() is used to call the constructor
of the parent class.

Important Interview Point:
Inside a child constructor,
super() must be called before using this.
*/

class Animal {

    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal {

    constructor(name, color) {

        // Calling Parent Constructor
        super(name);

        this.color = color;
    }

    details() {
        console.log(`${this.name} is ${this.color}`);
    }
}

const c1 = new Cat("Kitty", "Black");

c1.details();



/*
=========================================
METHOD OVERRIDING
=========================================

Definition:
When a child class provides its own version
of a parent class method, it is called
Method Overriding.

Interview Question:
Q: What is Runtime Polymorphism?
A: Method Overriding is an example of
Runtime Polymorphism.
*/

class Animal {

    sound() {
        console.log("Animal makes sound");
    }
}

class Dog extends Animal {

    // Overriding Parent Method
    sound() {
        console.log("Dog Barks");
    }
}

const a1 = new Animal();
const d1 = new Dog();

a1.sound();
d1.sound();


/*
=========================================
SINGLE INHERITANCE
=========================================

Definition:
One Child inherits from One Parent.

Animal
   │
   ▼
  Dog
*/

class Animal {

    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {

    bark() {
        console.log("Barking");
    }
}


/*
=========================================
MULTILEVEL INHERITANCE
=========================================

Definition:
A child class becomes parent
for another class.

Animal
   │
   ▼
  Dog
   │
   ▼
 Puppy

Interview Question:
Q: Can Puppy access eat()?
A: Yes, because Puppy inherits Dog,
and Dog inherits Animal.
*/

class Animal {

    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {

    bark() {
        console.log("Barking");
    }
}

class Puppy extends Dog {

    cry() {
        console.log("Crying");
    }
}

const p1 = new Puppy();

p1.eat();
p1.bark();
p1.cry();


/*
=========================================
HIERARCHICAL INHERITANCE
=========================================

Definition:
Multiple child classes inherit
from one parent class.

        Animal
       /      \
      ▼        ▼
    Dog       Cat
*/

class Animal {

    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {

    bark() {
        console.log("Barking");
    }
}

class Cat extends Animal {

    meow() {
        console.log("Meowing");
    }
}

/*
=========================================
MULTIPLE INHERITANCE
=========================================

Definition:
One class inherits from multiple classes.

JavaScript DOES NOT support this directly.

❌ Invalid

class Duck extends Bird, Fish {}

Alternative:
Use Mixins

Interview Question:
Q: How is Multiple Inheritance achieved in JavaScript?
A: Using Mixins and Object.assign().
*/

const flyMixin = {

    fly() {
        console.log("I can fly");
    }
};

const swimMixin = {

    swim() {
        console.log("I can swim");
    }
};

class Duck {

}

/*
Object.assign()

Copies methods from source objects
into target object.

Duck Prototype receives:
1. fly()
2. swim()
*/

Object.assign(
    Duck.prototype,
    flyMixin,
    swimMixin
);

const d1 = new Duck();

d1.fly();
d1.swim();