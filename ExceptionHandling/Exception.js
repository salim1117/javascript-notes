const prompt = require("prompt-sync")();
// prompt always give string format 
let n1 = Number(prompt("Enter 1st number: "));
let n2 = Number(prompt("Enter 2nd number: "));

function divide(n1, n2) {

    if (n2 !== 0) {
        return n1 / n2;
    } else {
        throw new Error("Can't Divide by zero");
    }

}

try {

    let res = divide(n1, n2);

    console.log(`The result of ${n1} and ${n2} = ${res}`);

} catch (e) {

    console.log(e.name);      // Error
    console.log(e.message);   // Can't Divide by zero

} finally {

    console.log("Finished Execution");

}