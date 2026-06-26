/*****************************************************************

TOPIC : JSON (JavaScript Object Notation)

Definition:
JSON is a text-based format used to exchange data
between client and server.

Examples:
Server ---> Browser
Java ---> JavaScript
Python ---> JavaScript

JSON is language independent.

*****************************************************************/


/*****************************************************************

INTERVIEW QUESTION 1

What is JSON?

Answer:

JSON (JavaScript Object Notation) is a lightweight
text-based format used for storing and exchanging data
between applications.

*****************************************************************/


/*****************************************************************

JSON EXAMPLE

Notice:
Keys and string values use double quotes.

*****************************************************************/

let jsonString = `
{
    "name":"Saleem",
    "age":25,
    "city":"Bangalore"
}
`;


// JSON received from server is a STRING
console.log(typeof jsonString); // string


/*****************************************************************

TOPIC : JSON.parse()

Definition:
Converts JSON String into JavaScript Object.

String ---> Object

Used when receiving data from server.

*****************************************************************/


// Convert JSON string into JavaScript object
let user = JSON.parse(jsonString);


// Access object properties
console.log(user.name);
console.log(user.age);
console.log(user.city);


/*****************************************************************

INTERVIEW QUESTION 2

What is JSON.parse()?

Answer:

JSON.parse() converts a JSON string into a
JavaScript object.

*****************************************************************/


/*****************************************************************

NESTED JSON EXAMPLE

*****************************************************************/

let weatherJson = `
{
    "location":"Bangalore",

    "current":{
        "temperature":30,
        "humidity":70
    }
}
`;


// Convert JSON into object
let weather = JSON.parse(weatherJson);


// Access nested data
console.log(weather.location);

console.log(weather.current.temperature);

console.log(weather.current.humidity);


/*****************************************************************

TOPIC : JSON.stringify()

Definition:
Converts JavaScript Object into JSON String.

Object ---> String

Used before sending data to server.

*****************************************************************/


let student = {

    name: "Saleem",

    age: 25,

    city: "Bangalore"
};


// Convert object into JSON string
let studentJson = JSON.stringify(student);


console.log(studentJson);

console.log(typeof studentJson); // string


/*****************************************************************

INTERVIEW QUESTION 3

What is JSON.stringify()?

Answer:

JSON.stringify() converts a JavaScript object
into a JSON string.

*****************************************************************/


/*****************************************************************

MEMORY TRICK

Receiving Data

Server
  ↓
JSON String
  ↓
JSON.parse()
  ↓
Object


Sending Data

Object
  ↓
JSON.stringify()
  ↓
JSON String
  ↓
Server

*****************************************************************/