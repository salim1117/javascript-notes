

function fun1 () {
    console.log("fun1");
}

function fun2() {
    console.log("fun2");
}

function fun3() {
    console.log("fun3");   
}

function fun4() {
    console.log("fun4");
}

fun1();
setTimeout(fun2,5000);

setTimeout(fun3,2000);
fun4();