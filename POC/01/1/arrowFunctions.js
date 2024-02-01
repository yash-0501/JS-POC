// Syntax 

const sayHello = () =>{
    console.log("Hello!")
}
 
sayHello();

// const add = (a,b) =>{
//     return a+b;
// }

// Traditional anonymous function
(function (a, b) {
    return a + b + 100;
  });
  
  // Arrow function
  (a, b) => a + b + 100;

const add = (a,b) => a+b; // One liner functions

console.log(add(2,3));


// 'arguments' keyword

// Arguments keyword is not there in arrow funcitons

const addNumbers = (...nums) => { // ... spread operator
    console.log(nums.reduce((acc,curr)=>{
        acc += curr;
        return acc;
    }));
}

addNumbers(1,2,3,4,5);


// This keyword

const obj = {
    value: 225,
    a: function(){
        console.log(this.value);
    },
    b:()=>console.log(this.value),
}

obj.a();
obj.b();