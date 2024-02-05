let score1: number | string = 33

let score2: number | string = 43

console.log(score1 + score2); // we can store either a number or a string in this way

let score3: number | string = "12"
let score4: number | string = "34"

console.log(score3 + score4);

let score5: number | string = "12"
let score6: number | string = 34

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

const data: number[] = [1,2,3];
const data1: string[] = ["1","2","3"];

const data2: string[] | number[] = [1,2,3]; // this means array can either have only number or only  string
// const data3: string[] | number[] = [1,2,"3"]; // gives error

const data3: (string | number)[] = [1,2,"3"]; // this way we can have an array of strings and numbers



// Use case where we can define that the variable can only hold these particular values

let airplaneSeats: "aisle" | "middle" | "window"

airplaneSeats = "window"
// airplaneSeats = "cabincrew"
// gives error  - Type '"cabincrew"' is not assignable to type '"aisle" | "middle" | "window"'

// console.log(typeof(airplaneSeats))