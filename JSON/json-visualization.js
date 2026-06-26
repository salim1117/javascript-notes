/*****************************************************************

JSON COMPLETE VISUALIZATION

*****************************************************************/


/*

                WHY JSON?

      Java Server
           │
           ▼

         JSON

           ▲
           │

   JavaScript Browser


JSON is the common language.

*/


/*

        RECEIVING DATA

       SERVER

         │

         ▼

   JSON STRING

         │

         ▼

   JSON.parse()

         │

         ▼

       OBJECT

*/


/*

        SENDING DATA

       OBJECT

         │

         ▼

 JSON.stringify()

         │

         ▼

    JSON STRING

         │

         ▼

       SERVER

*/


/*

EXAMPLE

JSON STRING

{
   "name":"Saleem",
   "age":25
}


AFTER JSON.parse()

{
   name:"Saleem",
   age:25
}


*/


/*

INTERVIEW QUICK REVISION

1. What is JSON?

JSON is a text-based format used for
data exchange.


2. What is JSON.parse()?

Converts String -> Object


3. What is JSON.stringify()?

Converts Object -> String


4. Why JSON?

Because different applications and
programming languages can understand it.

*/


console.log("JSON Revision Completed 🚀");


