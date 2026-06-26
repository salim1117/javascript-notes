function car(model) {
    return {
        model,

        start() {
            console.log(this.model);
        }
    };
}

let car1 = car("BMW");
let car2 = car("Audi");

car1.start(); // this → car1
car2.start(); // this → car2

/*
• `this` refers to the object that is calling the method.
• It allows us to access that object's properties and 
methods without hardcoding the object's name.
• In object creation (using object literals, factory functions, or constructors),
 `this` points to the newly created object when its method is called.
 

 20-second interview answer
"this is a keyword that refers to the object calling the method. 
It helps us access the current object's properties without using
 the object's name directly. This makes the same method reusable 
 for multiple objects, such as car1 and car2."

 */