const cart = ["shoes","pants","kurta"];

// createOrder->proceedToPayment

console.log("START");
const promise = createOrder(cart);



function createOrder(cart){
    
    const pr = new Promise(function(resolve, reject){
        // createOrder
        // validateCart
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid");
            reject(err);
        }
        const orderId = "12345";
        if(orderId){
            resolve(orderId);
            // once we resolve anything it is passed as data in callback function
        }
    });


    return pr;
}

function validateCart(cart){
    return true;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successfull");
    })
}

promise.then((orderId)=>{
    console.log(orderId);
    return orderId
}).then(function (orderId){
    return proceedToPayment(orderId);
}).then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message);
});

// the catch at the last step handles all the promises anywhere in the chain

console.log("END");