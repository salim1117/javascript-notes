
// using object literal
 let student = {
    name : "salem",
    roll : 12,
    city : "delhi"
};
console.log(student);


// using new Object 
const newStudent = new Object();

newStudent.name = "Dany";
newStudent.roll = 13;
newStudent.city = "bnlr";

console.log(newStudent.name);





// using A CONSTRUCTOR fUNCTION
function consStudent(name , roll , city){
    this.name = name;
    this.roll = roll;
    this.city = city;
}
const s1 = new consStudent("Salim",21,"DVG");
const s2 = new consStudent("John", 22 , "bb");
console.log(s2);



// using ES6 Class
class Student {

    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

let st1 = new Student("Saleem", 21, "Bangalore");

console.log(s1);








// using Object.create

let person =  {


    greet () {
        console.log("Hello");
    }
}

let Samiiii  = Object.create(person);

Samiiii.name = "Sam";

console.log(Samiiii.name);
Samiiii.greet();



// Factory Function 

function createMen(name , age, city){

    return{
        name, age ,city , intro(){
            console.log(`Hello my name is ${this.name} and I am ${this.age} years old and I live in ${this.city}`);
        }
    };
}

let m1 = createMen("salem", 21, "delhi" );
console.log(m1);
m1.intro();