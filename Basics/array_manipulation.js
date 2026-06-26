// Used to add, remove, or replace elements at a specific index.
// Syntax
// array.splice(start, deleteCount, newValue);



// 1. Removing elements with splice()
let colors1 = ["Red", "Green", "Blue", "Yellow"];
colors1.splice(1, 2); 
console.log(colors1);   // Output: ["Red", "Yellow"]

// 2. Replacing elements with splice()
let colors2 = ["Red", "Green", "Blue"];
colors2.splice(1, 1, "Black"); 
console.log(colors2); // Output: ["Red", "Black", "Blue"]

/* 
3. SLICE()
Returns a portion of an array without changing the original array
*/
let colors3 = ["Red", "Green", "Blue", "Yellow"];
let extractedColors = colors3.slice(1, 3); 

console.log(colors3);          // Output: ["Red", "Green", "Blue", "Yellow"] (Unchanged!)
console.log(extractedColors);   // Output: ["Green", "Blue"] (The extracted part)

/*
slice() is safe. It only takes a "snapshot" copy of the section you asked for.
splice() is destructive. It actively changes, cuts, or inserts elements into the original array.
*/


console.log(colors3.indexOf("Green"));

//  includes()
// Checks whether an element exists.
console.log(colors3.includes("Green"));


// sort()
// Sorts array elements.
let arr = ["C","A","B"];
arr.sort();
console.log(arr);

// reverse()
// Reverses the order of elements in an array.
arr.reverse();
console.log(arr);



function f(num){
console.log(num);
}

let ar = ["Hi",2,3,4];

ar.forEach(function(num){
    console.log(num);
    console.log(num*num)
    
});


ar.forEach(f);




//map()