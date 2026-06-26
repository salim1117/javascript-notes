function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function callback(x , y , func){
    
   // console.log(mul(10,20));
    console.log( func(x,y));

}

callback(10, 20, add);


