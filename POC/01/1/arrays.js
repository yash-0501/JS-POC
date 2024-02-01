const a = [1,true,"Hello"];
console.log(a)

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3


fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

//  Increasing the length extends the array by adding empty slots without creating any new elements — not even undefined.

fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined


// Decreasing the length property does, however, delete elements.

fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
console.log(fruits) // [ 'banana', 'apple' ]


const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']
console.log(colors)


const arr = ['a', 'b', 'c', 'd', 'e'];


arr.copyWithin(0, 1, 2); // mutates arr

const arr2 = arr.slice().copyWithin(0, 3, 4); // does not mutate arr

const arr3 = [...arr].copyWithin(0, 4, 5); // does not mutate arr

console.log(arr);
console.log(arr2);
console.log(arr3);

// arr is not mutated
console.log(arr);

console.log(arr2.lastIndexOf('d'))


// forEach in JS

const print = (n) =>{
    console.log(n);
}

fruits.forEach(print);
// banana
// apple