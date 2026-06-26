
// normal method to create object

const Student = {
    name : "Saleem",
    age : 22,
    company : "xyz",
    work : function () {
        console.log(`${this.name} is ${this.age} working in ${this.company}`)
    }
}
console.log(Student.name);
console.log(Student.age);
console.log(Student.company);
Student.work();


// Class

class Employee {
    name = "Abi"
    age = 22
    company = "xyz"
    work = function() {
        console.log(`${this.name} is ${this.age} working in ${this.company}`)
    }
}

let e1 = new Employee()
console.log(e1.name);
console.log(e1.age);
console.log(e1.company);
e1.work