// ============================
// JavaScript Weird Operators
// ============================
function fun(){
// String + Number + Number
console.log(1 + "2" + 3);
// Output: 123
// Why:
// 1 + "2" => "12"   (string found, so concatenation)
// "12" + 3 => "123"

// String - Number
console.log("5" - 2);
// Output: 3
// Why:
// '-' forces numeric conversion
// "5" => 5
// 5 - 2 = 3

// String + Number
console.log("5" + 2);
// Output: 52
// Why:
// '+' with a string means concatenation
// 2 becomes "2"
// "5" + "2" => "52"

// Loose Equality
console.log(0 == false);
// Output: true
// Why:
// false converts to 0
// 0 == 0 => true

// Strict Equality
console.log(0 === false);
// Output: false
// Why:
// 0 is Number
// false is Boolean
// Types differ

// Post Increment
let a = 5;
console.log(a++);
// Output: 5
// Why:
// Use current value first
// Then increase
// a becomes 6 after printing

console.log(a);
// Output: 6
// Why:
// Previous statement increased a

// Pre Increment
let b = 5;
console.log(++b);
// Output: 6
// Why:
// Increase first
// Then print

// Complex Increment
let x = 5;
let y = x++ + ++x;

console.log(y);
// Output: 12
// Why:
// x++ returns 5, then x becomes 6
// ++x makes x 7 and returns 7
// 5 + 7 = 12

// Boolean Arithmetic
console.log(true + true);
// Output: 2
// Why:
// true => 1
// true => 1
// 1 + 1 = 2

console.log(true + false);
// Output: 1
// Why:
// true => 1
// false => 0
// 1 + 0 = 1

// Array vs False
console.log([] == false);
// Output: true
// Why:
// [] => ""
// "" => 0
// false => 0
// 0 == 0 => true

// Empty String vs Zero
console.log("" == 0);
// Output: true
// Why:
// "" converts to 0
// 0 == 0 => true

// Logical AND
console.log(5 && 10);
// Output: 10
// Why:
// Both are truthy
// && returns last value

// Logical OR
console.log(0 || 100);
// Output: 100
// Why:
// 0 is falsy
// || returns first truthy value

// NOT with String
console.log(!"hello");
// Output: false
// Why:
// Non-empty string => true
// !true => false

// NOT with Zero
console.log(!0);
// Output: true
// Why:
// 0 => false
// !false => true

// String Multiplication
console.log("10" * "2");
// Output: 20
// Why:
// '*' forces number conversion
// 10 * 2 = 20

// Invalid Multiplication
console.log("hello" * 2);
// Output: NaN
// Why:
// "hello" cannot become a number

// typeof NaN
console.log(typeof NaN);
// Output: number
// Why:
// Historical JavaScript behavior
// NaN belongs to Number type

// Empty Arrays
console.log([] + []);
// Output: ""
// Why:
// [] => ""
// [] => ""
// "" + "" => ""

// Array + Object
console.log([] + {});
// Output: [object Object]
// Why:
// [] => ""
// {} => "[object Object]"
// Concatenation gives "[object Object]"

// Strict Equality
console.log(5 === "5");
// Output: false
// Why:
// Number !== String

// Loose Equality
console.log(5 == "5");
// Output: true
// Why:
// "5" converts to 5
// 5 == 5

// Strict Not Equal
console.log(5 !== "5");
// Output: true
// Why:
// Types differ

// Loose Not Equal
console.log(5 != "5");
// Output: false
// Why:
// "5" converts to 5
// 5 != 5 => false


 }