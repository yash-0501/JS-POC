// {}

// This is a block in JS

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// All the three can be accessed inside the block scope

// 10
// 20
// 30

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);

// 10
// 20
// 30
// 10

// var can be accessed outside the block since it hs global scope

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// console.log(b);

// 10
// 20
// 30
// 10
// Reference error b is not defined

// Only var can be accessed outside the block since it hs global scope
// Let and const are block scoped

// ------ Shadowing ------

// var a = 100;

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);

// 10
// 20
// 30
// 10

// var b = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(b);

// 10
// 20
// 30
// 100

// Illegal Shadowing
// let a = 20;
// {
//     var a = 20;
// }

// SyntaxError: Identifier 'a' has already been declared

var a = 10;
{
  let a = 100;
  console.log(a);
}

console.log(a);

// 100
// 10
