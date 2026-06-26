// function Declaration
function  add (x,j) {
    console.log(`Fuction Declaration`)
    return x*j; 
}

//Function Expression
const add2 = function(x,j) {
     console.log(`Fuction Expression`)
    return x*j;
}

// Arrow Function
const add3 = (x, j) => {
    console.log(`Arrow Function`);
    return x*j;
}


// IIFE
(function(){
    console.log(`Immideiately Invoked Function Expression `)

})()



console.log(add(2,2))

console.log(add2(2,2))

console.log(add3(2,2));


function s () {
    console.log("f")
}

 let x  = function(){
    console.log(`Sex`);
 }

 let k = () => {
        console.log("F");
 }

 (function(){
    console.log("IIFE");
 })();

 s();
 x();
 k();







 function y (val){
    val();
 }

y (function z () {
    console.log("kkkkk");
})



function a (val){
    val();
}

a(function () {
    console.log("ssssss");
})


function higerorder () {
    return function() {
        console.log(`Higer Order Function`);
    };
}

higerorder()();


var j = 2;

function s() {
    console.log("Pure Function",j);
     // pure function does not change Values 
}

function kk() {
    j++;    /// impure Function bahar ki value is changing
}

s();
kk();
console.log(j)

// Closure 

function parent() {
let x = 10;
    return function () {
        console.log(x);
    }
  /// child func is using the parent fun Variable
}

parent()();


(function(){
console.log("FF")
})

();

/*

Definition: A callback function is simply a function passed as 
an argument to another function (known as a higher-order function), 
which then executes the passed function at a later time .


Why they work: In JavaScript, functions are treated as objects (first-class citizens),
 allowing them to be passed as inputs just like any other data type .
Practical Examples:
Calculator Logic 
The instructor demonstrates creating a calculator function that 
accepts two numbers and a specific operation function (like add, sub, or mul).
 This avoids the need to remember multiple function names for basic tasks.
 */