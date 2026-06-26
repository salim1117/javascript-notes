/********************************************************************

                    JAVASCRIPT EVENT LOOP

    JavaScript is Single Threaded

                        👨‍💻
                    JavaScript

            Can do only ONE task at a time


    ---------------------------------------------------

    Components:

    ┌──────────────────────────────┐
    │         CALL STACK           │
    └──────────────────────────────┘

    ┌──────────────────────────────┐
    │      MICROTASK QUEUE         │
    │  Promise.then()             │
    │  Promise.catch()            │
    │  Promise.finally()          │
    └──────────────────────────────┘

    ┌──────────────────────────────┐
    │      MACROTASK QUEUE         │
    │  setTimeout()               │
    │  setInterval()              │
    │  DOM Events                 │
    └──────────────────────────────┘

    ┌──────────────────────────────┐
    │        EVENT LOOP            │
    └──────────────────────────────┘


    EVENT LOOP RULE:

    1. Wait until Call Stack becomes empty

    2. Execute ALL Microtasks

    3. Execute ONE Macrotask

    4. Repeat forever

********************************************************************/


// Synchronous code executes immediately
console.log("1. Start");


// setTimeout callback goes into Macrotask Queue
setTimeout(() => {

    console.log("4. Timer Callback");

}, 0);


// Promise callback goes into Microtask Queue
Promise.resolve()

    .then(() => {

        console.log("3. Promise Callback");

    });


// Synchronous code executes immediately
console.log("2. End");


/********************************************************************

STEP-BY-STEP EXECUTION

---------------------------------------------------
STEP 1
---------------------------------------------------

console.log("Start")

CALL STACK

┌──────────────┐
│ console.log  │
└──────────────┘

OUTPUT

Start


---------------------------------------------------
STEP 2
---------------------------------------------------

setTimeout(...)

Callback is NOT executed immediately.

It goes to WEB API.

WEB API

┌────────────────────┐
│ setTimeout Timer   │
└────────────────────┘


---------------------------------------------------
STEP 3
---------------------------------------------------

Promise.resolve().then(...)

Promise callback goes into:

MICROTASK QUEUE

┌────────────────────┐
│ Promise Callback   │
└────────────────────┘


---------------------------------------------------
STEP 4
---------------------------------------------------

console.log("End")

OUTPUT

Start
End


---------------------------------------------------
STEP 5
---------------------------------------------------

Call Stack becomes EMPTY

EVENT LOOP wakes up.

EVENT LOOP asks:

"Any Microtasks?"


MICROTASK QUEUE

┌────────────────────┐
│ Promise Callback   │
└────────────────────┘

YES


---------------------------------------------------
STEP 6
---------------------------------------------------

Execute Promise Callback

OUTPUT

Start
End
Promise Callback


MICROTASK QUEUE

EMPTY


---------------------------------------------------
STEP 7
---------------------------------------------------

EVENT LOOP asks:

"Any Microtasks?"

NO


Now check:

MACROTASK QUEUE

┌────────────────────┐
│ Timer Callback     │
└────────────────────┘

YES


---------------------------------------------------
STEP 8
---------------------------------------------------

Execute Timer Callback

OUTPUT

Start
End
Promise Callback
Timer Callback

********************************************************************/