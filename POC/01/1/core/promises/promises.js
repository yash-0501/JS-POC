// const cart = ["Shoes","Pants","Kurta"];

// createOrder(cart); //orderID

// proceedToPayment(orderId); //we can only use this after create order

// How we do this using call  back functions :

// createOrder(cart, function(orderId){
//     proceedToPayment(orderId);
// });

// The responsibility of createOrder function is to create a order and once a order is created, call the proceedToCart function with orderID

// The issue with the above code is inversion of control - callbacks aren't reliable


// how to handle these cases using promises:

// const promise = createOrder(cart); 

// returns {data: undefined}

// createOrder is an async operation 

// and when this createOrder function is finshed, the promise object will be filled with data in it

// returns {data: orderDetails}

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// }); 

// here we are attaching a function to a promise object

// as soon as we have data inside promise, it will call the function inside it definitely and only once, we will also have control of the code with us


// EXAMPLE

// const github_api = "https://api.github.com/users/yash-0501"

// const user = fetch(github_api); // returns a promise

// console.log(user)

// Promise --> Prototype: Promise
        // --> PromiseState: "pending"   / "fullfilled" / "rejected"
        // --> PromiseResult: undefined


// user.then(function(data){
//     console.log(data);
// })

// JS guarentees that promise object can only be resolved once --> success/failiure

// Promise objects are immutable, resolved just once, and can be called anywhere


// Promise chaining

createOrder(cart).then(function (orderId){
    return proceedToPayment(orderId);
}).then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
}).then(function (summary){
    return updateWallet(summary);
});

// Helps us get out of callback hell