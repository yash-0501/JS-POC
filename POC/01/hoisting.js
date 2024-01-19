//  ------- Normal Working ---------

// var x = 7

// function getName(){
//     console.log("JS POC");
// }

// getName();
// console.log(x);

// Output:
// JS POC
// 7

// ---------- Normal Working -------

// -------- Hoisting -----------

// getName();
// console.log(x);

// var x = 7

// function getName(){
//     console.log("JS POC");
// }

// Output:
// JS POC
// undefined

// ----------------------

// getName();
// console.log(x);

// function getName(){
//     console.log("JS POC");
// }

// Output:
// JS POC
// Error x is not defined

// ----------------------------

// function getName(){
//     console.log("JS POC");
// }

// console.log(getName)

// Prints the function

// ----------------------------

// console.log(getName)

// function getName(){
//     console.log("JS POC");
// }

// Still Prints the function (Not like the variable x)

// ----- In case of Arrow Functions ------
console.log(getName);

var getName = () => {
  console.log('JS POC');
};

//Output: undefined

// The getName behaves as a variable

// --------- Hoisting -------
