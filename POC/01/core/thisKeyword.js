// "use strict"

// this in global space

// console.log(this) // global object --> window in browser, {} in nodeJS


// Inside a function

// function x(){
//     // value depends on strict and non strict mode
//     console.log(this);
// }

// x();

// window.x();


// this inside a object's method

// const obj = {
//     a:10,
//     x:function (){
//         console.log(this);
//     }
// }

// obj.x();
// { a: 10, x: [Function: x] }



// call apply and bind


const student1 = {
    name:"YASH",
    printName:function (){
        console.log(this.name);
    }
}

student1.printName();

// we can share the printName method with Student2 by overriding the value of this keyword

const student2 = {
    name:"Deepika",
}

student1.printName.call(student2);  // value of this becomes student2


// this keyword inside arrow functions

const obj = {
    a: 10,
    x: () =>{
        console.log(this); // behaves like in the global scope
    }
}

obj.x();


const abc = function(){
    const obj = {
        a: 10,
        x: () =>{
            console.log(this); // behaves like in the abc lexical scope
        }
    }
    
    obj.x();
}

abc();


const obj2 = {
    a: 20,
    x: function (){
        const y = () =>{
            console.log(this);
            // { a: 1, x: [Function: x] }
        }
        y();
    },
};

obj2.x();
