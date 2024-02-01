// function x(){
//     console.log("JS POC");
// }

// function y(x){
//     x();
// }

// y(x);

const radius = [3,1,2,4]

const area = function  (radius){
    return Math.PI * radius * radius;
}

const diameter = function (radius){
    return 2 * radius;
}

const circumference = function(radius){
    return Math.PI * 2 * radius
}

// const calculate = function (radius, logic){
//     const output = []
//     for(let i = 0; i<radius.length; i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log(calculate(radius,area));
// console.log(calculate(radius,diameter));
// console.log(calculate(radius,circumference));


// Calculate function is the higher order function, area circumference diameter are passed as argument into it


console.log(radius.map(area))

// What we did with Calculate function is create our own implementation of map 
// What  map does is creates a new array, iterate over each element of the array passed (radius), and returns the output

Array.prototype.calculate = function (logic){
    const output = []
    for(let i = 0; i<this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area))