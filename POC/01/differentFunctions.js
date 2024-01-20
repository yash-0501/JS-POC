// // Function Statement
// a();
// b();
// function a(){
//     console.log("a is called");
// }

// // The above way of creating a function is called function statement


// // Function Expression

// var b = function (){
//     console.log("b is called");
// }



// Anonymous Functions

// function (){
//     console.log('a');
// }

// SyntaxError: Function statements require a function name

// Valid anonymous function - when we use function expression

// var a  =  function(){
//     console.log('a');
// }

// Named function expression

// var a  =  function b(){
//    console.log('a-named is called');
// }

// // When we give a name to the anonymous function inside the function expression
// a();
// b();


// Now, When I try to call b, it gives an error - b is not defined

// Difference between Parameters and Arguments

// var b = function (param1, param2){
//     console.log(param1, param2);
// }

// b(1,2);

// Here param1 and param2 are the parameters and these variables cannot be accessed outside the function
//1 & 2 are the arguments which are passed to the function


// First Class Functions

// We can pass one function into another function as a parameter

// var b = function(param1){
//     console.log(param1);
// }

// function xyz(){

// }

// b(xyz);


var b = function(){
    return function xyz(){

    };
}

console.log(b());
