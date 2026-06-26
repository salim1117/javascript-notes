

let ar1 = [ [10 , 20] ,[ 30 ,40]  ];
console.log(ar1);

let ar2 = [...ar1];   // both spread and slice are shallow copy 
// let ar2 = ar1.slice();

console.log(ar2);

ar1.push(50);

console.log(ar1);
console.log(ar2);




let a = [{ x: 10 }];
let b = [...a];

a[0].x = 99;      // shared object modified
console.log(b[0].x); // 99

a[0] = { x: 500 }; // reference replaced
console.log(b[0].x); // 99



/*****************************************************************
                SHALLOW COPY vs DEEP COPY
******************************************************************

Rule 1:
Primitive values (Number, String, Boolean) are copied by VALUE.

Rule 2:
Objects and Arrays are copied by REFERENCE.

Shallow Copy
------------
✔ Creates a NEW outer object.
❌ Nested objects are NOT copied.
✔ Nested objects share the SAME memory.

Deep Copy
---------
✔ Creates a NEW outer object.
✔ Creates NEW nested objects.
✔ Nothing is shared.

*****************************************************************/


// ======================================================
// EXAMPLE 1 : SHALLOW COPY
// ======================================================

console.log("========= SHALLOW COPY =========");

let student1 = {

    // Primitive value
    name: "Saleem",

    // Nested object
    address: {
        city: "Bangalore"
    }
};


// Spread operator creates a SHALLOW COPY.
//
// What is copied?
// ✔ Outer object
//
// What is NOT copied?
// ❌ Nested object (address)
//
// Both student1 and student2 point
// to the SAME address object.
let student2 = { ...student1 };


console.log(student1);
console.log(student2);


// ------------------------------------------------------
// Change a primitive value
// ------------------------------------------------------

// Changing name creates a NEW string value.
// Strings are primitive values.
//
// Therefore only student1 changes.
student1.name = "Rahul";

console.log("\nAfter changing name");

console.log(student1.name); // Rahul
console.log(student2.name); // Saleem


// ------------------------------------------------------
// Change a nested object
// ------------------------------------------------------

// address is an OBJECT.
//
// student1.address
// and
// student2.address
//
// point to the SAME object.
//
// Therefore changing city
// changes it for BOTH objects.
student1.address.city = "Mysore";

console.log("\nAfter changing city");

console.log(student1.address.city); // Mysore
console.log(student2.address.city); // Mysore


/*
Memory Diagram

student1
   |
   +-------> {
                name : "Rahul"
                address --------+
                                |
                                v
                          { city : "Mysore" }
             }

student2
   |
   +-------> {
                name : "Saleem"
                address --------+
                                |
                                +------> SAME OBJECT
             }

*/


// ======================================================
// DEEP COPY
// ======================================================

console.log("\n========= DEEP COPY =========");

let employee1 = {

    name: "John",

    address: {
        city: "Delhi"
    }

};


// Deep Copy
//
// Copies EVERYTHING.
//
// Outer object ✔
//
// Nested object ✔
//
// Nothing is shared.
let employee2 = structuredClone(employee1);


// Change primitive value
employee1.name = "David";


// Change nested object
employee1.address.city = "Mumbai";


console.log(employee1);

console.log(employee2);


/*
Memory Diagram

employee1

{
    name : "David"

    address -----> { city : "Mumbai" }
}


employee2

{
    name : "John"

    address -----> { city : "Delhi" }
}

Different memory.

Nothing is shared.
*/


// ======================================================
// INTERVIEW POINT
// ======================================================

/*

Spread (...)

Object.assign()

slice()

All create SHALLOW COPY.


structuredClone()

creates DEEP COPY.


Older method

JSON.parse(JSON.stringify(obj))

also creates a deep copy
for simple JSON data,
but it cannot correctly copy
functions, Date, Map, Set, etc.

Therefore,
structuredClone() is preferred
in modern JavaScript.

*/


// ======================================================
// REMEMBER FOREVER
// ======================================================

/*

SHALLOW COPY

New outer object
Same nested objects



DEEP COPY

New outer object
New nested objects


One line interview answer

Shallow Copy:
"A shallow copy copies only the first level.
Nested objects still share the same memory reference."

Deep Copy:
"A deep copy recursively copies every nested object,
creating completely independent memory references."

*/




/*
A shallow copy creates a new outer object, but nested objects and 
arrays still share the same memory reference. Therefore, if we modify
 a nested object in the original, the changes are reflected in the copied
  object. A deep copy creates completely independent copies of all nested object
s, so changes made to the original object do not affect the copied object."*/