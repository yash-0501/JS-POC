// let name_obj = {
//     firstname: "Yash",
//     lastname: "Agarwal" 
// }

// let printName = function (){
//     console.log(this.firstname + " " + this.lastname);
// }

// let printMyName = printName.bind(name_obj);
// printMyName();

// // We have to write our own implementation  of bind method

// Function.prototype.myBind = function(name_obj){
//     // this points to printName method
//     this(name_obj);
// }

// let printMyName2 = printName.bind(name_obj);
// printMyName2();

// // Handling extra arguments

// let name_obj = {
//     firstname: "Yash",
//     lastname: "Agarwal" 
// }

// let printName = function (techstack){
//     console.log(this.firstname + " " + this.lastname + ": " + techstack);
// }

// let printMyName = printName.bind(name_obj, "MERN");
// printMyName();

// // We have to write our own implementation  of bind method

// Function.prototype.myBind = function(...args){
//     // this points to printName method
//     // we can extract the params from args using slice method
//     params = args.slice(1); // removes the first element from the list
//     let obj = this;

//     return function(){
//         obj.apply(args[0], params);
//     }
// }

// let printMyName2 = printName.bind(name_obj, "MERN Stack");
// printMyName2();





// Handling extra arguments inside of printMyName()

let name_obj = {
    firstname: "Yash",
    lastname: "Agarwal" 
}

let printName = function (techstack, location){
    console.log(this.firstname + " " + this.lastname + ": " + techstack+" at ", location);
}

let printMyName = printName.bind(name_obj, "MERN");
printMyName("Bangalore");

// We have to write our own implementation  of bind method

Function.prototype.myBind = function(...args){
    // this points to printName method
    // we can extract the params from args using slice method
    params = args.slice(1); // removes the first element from the list
    let obj = this;

    return function(...args2){
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printMyName2 = printName.myBind(name_obj, "MERN Stack");
printMyName2("Bengaluru");