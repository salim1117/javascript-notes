
for(var i = 1 ; i<=100 ; i++){
    i = i+i;
}
    console.log(`sum from 1 to 100   =  ${i}`);


    function x (...Scores){
 let t = 0;
        Scores.forEach(function y (value){
            t = t + value
        })
console.log(t);
    }

    x(10,20,30,40,50);



    function ll(){
        console.log("x");
    }

    function uu(valu){
        //ll();
       valu();
    }
    uu(ll);


    (function normal () {
    console.log("Normal Function to IFEE");
    }) ();


    function dis (price) {
        return function (discount){
            return price - discount; 
        }
    }
    let ten = dis(2000);
    console.log(ten(10));