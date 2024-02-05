var score1 = 33;
var score2 = 43;
console.log(score1 + score2); // we can store either a number or a string in this way
var score3 = "12";
var score4 = "34";
console.log(score3 + score4);
var score5 = "12";
var score6 = 34;
console.log(score5 + score6);
// function printId(id: number | string) {
//     console.log("Your ID is: " + id);
//   }
//   // OK
//   printId(101);
//   // OK
//   printId("202");
//   // Error
// //   printId({ myID: 22342 });
//   Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.
// function printId(id: number | string) {
//     console.log(id.toUpperCase());
//   }
// function welcomePeople(x: string[] | string) {
//     if (Array.isArray(x)) {
//         // Here: 'x' is 'string[]'
//         console.log("Hello, " + x.join(" and "));
//     } else {
//         // Here: 'x' is 'string'
//         console.log("Welcome lone traveler " + x);
//     }
// }
// Arrays with union
var data = [1, 2, 3];
var data1 = ["1", "2", "3"];
var data2 = [1, 2, 3]; // this means array can either have only number or only  string
// const data3: string[] | number[] = [1,2,"3"]; // gives error
var data3 = [1, 2, "3"]; // this way we can have an array of strings and numbers
// Use case where we can define that the variable can only hold these particular values
var airplaneSeats;
airplaneSeats = "window";
// airplaneSeats = "cabincrew"
// gives error  - Type '"cabincrew"' is not assignable to type '"aisle" | "middle" | "window"'
console.log(typeof (airplaneSeats));
