/*
====================================================
POLYMORPHISM IN JAVASCRIPT
====================================================

Definition:
Polymorphism means "Many Forms".

The same method can perform different actions
depending on the object that calls it.

Here we use:
1. Inheritance
2. Method Overriding

This is Runtime Polymorphism.
*/

class Employee {

    constructor(name) {
        this.name = name;
    }

    // Common method
    work() {
        console.log(`${this.name} is working`);
    }
}

/*
Developer overrides work()
*/
class Developer extends Employee {

    work() {
        console.log(`${this.name} is writing code`);
    }
}

/*
Tester overrides work()
*/
class Tester extends Employee {

    work() {
        console.log(`${this.name} is testing applications`);
    }
}

/*
Manager overrides work()
*/
class Manager extends Employee {

    work() {
        console.log(`${this.name} is managing the team`);
    }
}


// Creating Objects

const d1 = new Developer("Saleem");
const t1 = new Tester("Rahul");
const m1 = new Manager("Amit");

/*
Same method call

work()

Different outputs

This is Polymorphism
*/

d1.work();
t1.work();
m1.work();



/// Method Overloading is not possible ij js  Compile-Time Polymorphism

class Test {

    add(a,b){
        return a+b;
    }

    add(a,b,c){
        return a+b+c;
    }
}


//The second method replaces the first one.


/*
2. Runtime Polymorphism
Also called:


Method Overriding
Achieved using:

JavaScript

extends
and

JavaScript

Method Overriding
Example:

JavaScript

class Animal {

    sound(){
        console.log("Animal Sound");
    }
}

class Dog extends Animal {

    sound(){
        console.log("Dog Bark");
    }
}
This is the main form of polymorphism in JavaScript classes.

*/

// we can achive method overloading through Rest Parameters

class Vehicle {

    name(...args){
        console.log(args);
    }
   
}

let v1 = new Vehicle();
v1.name("Volvo",2027,"disel");
v1.name("BMW");


