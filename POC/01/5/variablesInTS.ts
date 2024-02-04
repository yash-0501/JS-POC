// string
let greeting: string = "Hello World!";

// number
let userid: number = 1;

// boolean
let isPresent: boolean = true;

// Type inference ---> 
let num = 31;

// now if I try to use nums = "string"
//  it will give error

console.log(greeting);

let arr: number[] = [1,2,3];

console.log(arr);


// -------------- ANY ---------------

let hero;

function getHero(){
    return "Thor";
}

hero = getHero();

// here hero is being infered as ANY

// -------------- ANY ---------------

export {}