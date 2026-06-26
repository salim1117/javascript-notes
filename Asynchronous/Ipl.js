
function fetchScores () {
    console.log("Fetching Scores.....");
} 

let intervalId = setInterval(fetchScores,2000);   // for every 2 seconds fetch the functions 


//    clearInterval(intervalId);  // clearinterval will clear  that function with that Interval id   -- so instead of this 


setTimeout(   () =>  {clearInterval(intervalId);}  , 8000 )     // this will  wait for 8 seconds and then execute the functions  



