function car(model , colour , type){

    return {
        model,
        colour,
        type,

        start : function () {
            console.log(`${this.model} is in ${this.colour} and it it ${this.type} Engine`);
        }

    };


}

const c1 = new car("BMW","BLack","Disel");
// console.log(c1);


const car1 = {
    name : "BMW",
    model : "X5",
    colour : "Black"

}


//
// for( key in car1 ){
//     console.log(key + " : "+car1[key]);
// }

// //  console.log(Object.keys(car1));


// const keys = Object.keys(car1);

// for(let i = 0 ; i<keys.length ; i++){
//     console.log(keys[i]+" "+car1[keys[i]]);
    
// }


const val = Object.values(car1);
// console.log(val);

for(let i = 0 ; i<val.length ; i++){
    console.log(val[i]);
}


let  c11 = new car("GT","White","Disel");

console.log(c1);
c11.start();

