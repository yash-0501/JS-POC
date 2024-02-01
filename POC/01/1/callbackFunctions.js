// function x(y){

// }

// x(function y(){

// })

// Here the function y is a callback function


setTimeout(function(){
    console.log("Timer")
}, 5000)

function x(y){
    console.log("x");
    y();
}


x(function y(){
    console.log('y');
});