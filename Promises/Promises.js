// ==========================================
// Step 1 : Place Order
// ==========================================

function placeOrder() {

    // Returning a Promise because
    // order confirmation comes later
    return new Promise((resolve, reject) => {

        console.log("🛒 Checking Restaurant Status...");

        setTimeout(() => {

            // Simulating restaurant status
            let restaurantOpen = true;

            // If restaurant is open
            if (restaurantOpen) {

                // Success
                // Passing Order ID to next step
                resolve("ORDER-101");

            } else {

                // Failure
                reject("❌ Restaurant is Closed");

            }

        }, 2000);

    });

}


// ==========================================
// Step 2 : Prepare Food
// ==========================================

function prepareFood(orderId) {

    // Returning Promise because
    // food preparation takes time
    return new Promise((resolve, reject) => {

        console.log(`👨‍🍳 Preparing Food For ${orderId}`);

        setTimeout(() => {

            // Simulating food availability
            let foodAvailable = true;

            if (foodAvailable) {

                resolve("🍗 Chicken Biryani Ready");

            } else {

                reject("❌ Biryani Out Of Stock");

            }

        }, 2000);

    });

}


// ==========================================
// Step 3 : Assign Rider
// ==========================================

function assignRider(food) {

    // Returning Promise because
    // finding a rider takes time
    return new Promise((resolve, reject) => {

        console.log(`🚴 Finding Rider For ${food}`);

        setTimeout(() => {

            // Simulating rider availability
            let riderAvailable = true;

            if (riderAvailable) {

                resolve("🚴 Rahul Assigned");

            } else {

                reject("❌ No Rider Available");

            }

        }, 2000);

    });

}


// ==========================================
// Step 4 : Deliver Food
// ==========================================

function deliverFood(rider) {

    // Returning Promise because
    // delivery takes time
    return new Promise((resolve, reject) => {

        console.log(`📦 ${rider} Is Delivering Food`);

        setTimeout(() => {

            // Simulating successful delivery
            let deliverySuccess = true;

            if (deliverySuccess) {

                resolve("🍽️ Food Delivered Successfully");

            } else {

                reject("❌ Delivery Failed");

            }

        }, 2000);

    });

}


// ==========================================
// Promise Chaining Starts Here
// ==========================================

placeOrder()

    // Runs when placeOrder() succeeds
    .then((orderId) => {

        console.log(`✅ Order Confirmed : ${orderId}`);

        // IMPORTANT:
        // Returning Promise so that
        // next .then() receives its result
        return prepareFood(orderId);

    })

    // Runs when prepareFood() succeeds
    .then((food) => {

        console.log(`✅ ${food}`);

        return assignRider(food);

    })

    // Runs when assignRider() succeeds
    .then((rider) => {

        console.log(`✅ ${rider}`);

        return deliverFood(rider);

    })

    // Runs when deliverFood() succeeds
    .then((message) => {

        console.log(`✅ ${message}`);

        console.log("😋 Enjoy Your Biryani");

    })

    // Runs if ANY Promise is rejected
    .catch((error) => {

        console.log(error);

    });


    /*
    Interview Explanation (Simple & Clear)
If the interviewer asks:

What is a Promise?
You can say:

A Promise is a JavaScript object that represents the eventual completion or
 failure of an asynchronous operation. It has three states: Pending, Fulfilled, 
 and Rejected.

Why was Promise introduced?
You can say:

Before Promises, we used nested callbacks for asynchronous operations.
 When multiple operations depended on each other, the code became deeply nested,
  known as Callback Hell. Promises were introduced to make asynchronous code more 
  readable and maintainable.

Explain using a real-world example.
You can say:

I think of a Promise like ordering food on Swiggy. When I place an order,
 I don't receive the food immediately. Swiggy promises that the food will 
 either be delivered successfully or the order will fail. While the order 
 is being processed, the Promise is in the Pending state. If the food arrives,
  the Promise becomes Fulfilled and .then() executes. If the restaurant is closed
   or delivery fails, the Promise becomes Rejected and .catch() executes.

What do resolve() and reject() do?
You can say:

resolve() is used when the asynchronous operation completes successfully.
 reject() is used when the operation fails. JavaScript automatically sends
  successful results to .then() and errors to .catch().

Why do we return a Promise inside .then()?
You can say:
We return a Promise so that the next .then() waits for it to complete 
and receives its result. This creates a proper Promise chain and avoids callback hell.

One-line answer that impresses interviewers
Promises provide a clean way to handle asynchronous operations by 
representing future values and enabling structured success and error
 handling through .then() and .catch(), eliminating callback hell.

 */