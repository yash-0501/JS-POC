// console.log("HellO!");

// setTimeout(function (){
//     console.log("Yash")
// }, 5000)

// console.log("What is your name?")


// In this scenario first the order is to be created and then proceeded to payment, so here call backs come into picture

const cart = ["Shoes","Pants","Kurta"];

// proceedToPayment has dependancy on createOrder, showOrderSummary has dependancy on proceedToPayment
// To manage these dependencies, callbacks come in handy

// api.createOrder(cart, 
//     function (){
//         api.proceedToPayment(function (){
//             api.showOrderSummary(function (){
//                 api.updateWallet();
//             });
//         });
//     });

// Problem - Callback hell


// We blindly gave control to createOrder API, now it is the responsibility of createOrder API to call our function back
// Here we don't know if the control would return  back to this function or not, there could be some bugs in that API
// It may lead to a scenario where our proceedToPayment function is never called

api.createOrder(cart, 
    function (){
        api.proceedToPayment();
    });


// When we have a callback function and we pass it to some other function, we are giving the control of our code to some other code 
// ANd we don't know what is happening in the function now