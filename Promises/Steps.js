
function step1 ()
 {

    return new Promise ( (resolve, reject ) => 
        {
            console.log("Step 1 Started");

            setTimeout ( () => { 
                console.log("Step 1 is completed ")
                resolve();
            }, 3000);

        }
    );
}



function step2 () {

    return new Promise ( (resolve , reject ) => {

        console.log("Step 2 Started");

        setTimeout (  () =>  {
            console.log("Step 2 resolved");
            resolve();


        }  ,5000);
    }  );
}


function step3 () {

    return new Promise ( (resolve , reject ) => {
        console.log("Step 3 is Strting");

        setTimeout (()=> {
            console.log("Step 3 is executed ");
            reject();
        }, 5000);

    })
}


/*
step1()
.then(step2)
.then(step3)
.then( () => console.log ("All Steps Successfully Executed") )
.catch( () =>  console.log("Promise Failed"));  
*/


//  insted of this then and cath i can use 

async function run () {
    
    try 
    {
    await step1();
    await step2();
    await step3();
    console.log("All Steps Successfully Executed");
    }

    catch(error)
    {
        console.log("Promise Failed");
    }
    
}

run();