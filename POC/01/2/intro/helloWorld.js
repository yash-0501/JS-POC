// console.log("Hello!");

// Hello!

// console.log(window)
// // error - window is not defined


// const math = require('./math');

// // console.log(math(2,4));


// console.log(math.add(2,4));
// console.log(math.sub(2,4));

// const math = require("fs")
// console.log(math)



const { add, sub } = require("./math");

console.log(add(10,10));
console.log(sub(100,10));