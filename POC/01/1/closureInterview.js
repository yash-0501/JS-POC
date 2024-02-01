// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 4000);
//   console.log("JS POC");
// }

// x();

// JS POC
// 1

// Prints JS POC first and then wait for 4 seconds to print 1

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log('JS POC');
// }

// x();


// With the help of var

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i){
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log('JS POC');
// }

// x();


// Encapsulation using closures

// function counter(){
//   var count = 0;
//   return function incrementCounter(){
//     count++;
//     console.log(count);
//   }
  
// }

// var counter1 = counter();
// counter1();
// counter1();
// counter1();
// counter1();

// var counter2 = counter();
// counter2();
// counter2();


// Counter 2 will be a completely different counter function - it will form a new closure with it