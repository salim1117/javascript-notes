

let userInput = " Alice | alice@gmail.com | java developer | Coffepinewala" ;

let Parts = userInput.split("|");
console.log(Parts);

let name = Parts[0].trim();
let email = Parts[1].trim().toLocaleLowerCase();
let designation = Parts[2].trim().toUpperCase;
let intrest = Parts[3].trim();


console.log(name);
console.log(email);

