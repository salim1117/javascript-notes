

let arr = new Array(5);


arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;

for(let i = 0 ; i<arr.length ; i++){
   // console.log(arr[i]);
}


// Array Methods 

let arr2 = [1,2,3,4,5];
console.log(arr2.at(0));

arr2.push(6,7);  // add to last 
console.log(arr2);

arr2.pop();
console.log(arr2); // remove last

arr2.unshift(400)   // add to first 
console.log(arr2);

arr2.shift()
console.log(arr2);// remove first 

let removed = arr2.splice(1,2,20,30);
console.log(removed);

console.log(arr2);

// MAP

 let sqr = (x)  =>  Math.sqrt(x);


let SquareRoots = arr2.map(sqr);

console.log(SquareRoots);



// 


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
