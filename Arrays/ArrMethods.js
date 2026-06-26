// MAP

arr2 = [25 , 16 , 9 ,4,]
 let sqr = (x)  =>  Math.sqrt(x);


let SquareRoots = arr2.map(sqr);

console.log(SquareRoots);



// 

// Filter //
let age = [22,13,14,12,18];


function checkAge (a)
{
    if(a > 18)
        {
        return true;
    }
    else
        {
        return false;
    }
}

let allowed = age.filter(checkAge);
console.log(allowed);


// Reduce //

let arr = [1,2,3,4,5,6,7,8,9,10];

let sum = arr.reduce((total, curr) => total + curr,0)

console.log(sum);

// SUM 
let score = [90 , 50 , 6 ,70];

let hasGradeA = score.some((x) => x>75 );
console.log(hasGradeA);

let hasPass = score.every((x) => x>35);
console.log(hasPass);

let getElement = score.find((x) => x >75 )
console.log(getElement);

let getElementIndex = score.findIndex((x) => x >75 )
console.log(getElementIndex);

let sortedarray = score.sort();

console.log(sortedarray);