// ALWAYS RETURNS A PROMISE - If returning a value, will wrap it inside a promise and then return

// async function getData(){
//     return "JS POC";
// }

// const dataPromise = getData();

// console.log(dataPromise)
// // Promise { 'JS POC' }

// dataPromise.then(res=>console.log(res));

// JS POC


// const p = new Promise((resolve,reject)=>{
//     resolve("Promise resolved value");
// });

// async function getData(){
//     return p;
// }

// const dataPromise = getData();
// console.log(dataPromise)
// //Promise { <pending> }

// dataPromise.then(res=>console.log(res));
// //Promise resolved value




// How promises were handled before async and await:


// const p = new Promise((resolve,reject)=>{
//     resolve("Promise resolved value");
// });

// function getData(){
//     p.then(res => console.log(res));
// }

// getData();


// Handling using async await

// const p = new Promise((resolve,reject)=>{
//     resolve("Promise resolved value");
// });


// async function handlePromise(){
//     const val = await p;
//     console.log(val);
// }
// handlePromise();

//  What difference does it make in handling promises usiing async wait?

// const p1 = new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//         resolve("Promise resolved value");
//     }, 3000);
    
// });

// const p2 = new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//         resolve("Promise resolved value");
//     }, 5000);
    
// });

// function getData(){
//     // JS Engine doesn't wait for the promise to resolve
//     p.then(res => console.log(res));
//     console.log("JS POC")
// }

// getData();
// JS POC
// Promise resolved value



// async function handlePromise(){
//     const val = await p1; // If it's time is lesser, it will be printed first, but second promise isn't printed first
//     console.log("ASYNC AWAIT")
//     console.log(val);
    
//     const val2 = await p2; // Completed in 5 seconds but gets printed after 10 s
//     console.log("ASYNC AWAIT 2")
//     console.log(val2);
// }
// // After 10 secodnds all the promises gets resolved and all are printed in the order



// handlePromise();
// waits for 10 seconds to get the promise resolved 
// ASYNC AWAIT
// Promise is resolved


// Real world example using fetch

const API_URL = "https://api.github.com/users/yash-051";

async function handlePromise(){
    try{
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    }catch (err){
        console.log(err);
    }
}

handlePromise();