

function Student (name , clas , age ,gender){

    return{
        name ,
        clas,
        age,
        gender,
        intro() {
            console.log(`My name is ${this.name} and I am ${this.age} years old. I am in class ${this.clas}`);
        }

    }
    
}

let s1 = new Student("Salim",12,22,"M");
console.log(s1);
s1.intro();