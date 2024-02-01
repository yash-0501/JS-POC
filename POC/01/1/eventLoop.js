// console.log("Start");

// setTimeout(function cb(){
//     console.log("5 Seconds Completed");
// }, 5000);

// console.log("End");

// Start
// End
// 5 Seconds Completed


// Blocking main thread for 10 seconds

console.log("Start");

setTimeout(function cb(){
    console.log("5 Seconds Completed");
}, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("While Expired")

// Start
// End
// While Expired
// 5 Seconds Completed