// const arr = [5,1,3,2,6]

// function double(x){
//     return x * 2;
// }
// // [10,2,6,4,12]

// function triple(x){
//     return x * 3;
// }
// // [ 15, 3, 9, 6, 18 ]

// function binary(x){
//     return x.toString(2);
// }
// // ['101', '1', '11', '10', '110' ]

// const output = arr.map(binary);

// console.log(output)


// Filter

// const arr = [5,1,3,2,6];

// function isOdd(x){
//     return x%2;
// }
// // [ 5, 1, 3 ]

// function isEven(x){
//     return x%2==0;
// }
// // [ 2, 6 ]


// const output = arr.filter(isEven);

// console.log(output)


const arr = [5,1,3,2,6];

// Used where, we have to take all the elements of the array and come up with a single value out of them, eg: sum  of all the numbers in  an array or max of all the numbers in an array

// iterates over each and every element of the array (arr), curr -> the value of array, acc -> used to accumulate the result (sum or maximum)


// reduce function takes two arguments - accumulator function & initial value for acc 
// const output = arr.reduce(function sum(acc, curr){
//     acc = acc + curr;
//     return acc;
// },0);
// // 17

const output = arr.reduce(function maxi(acc, curr){
    acc = Math.max(acc,curr);
    return acc;
},-1);
// 6

console.log(output)

