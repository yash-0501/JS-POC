// function addtwo(num){
//     return num+2;
// }

// console.log(addtwo("2"));

// In the above example num expect any value (string number or bool)

function addtwo(num: number){
    return num+2;
}

// console.log(addtwo("2"));
// now this is not allowed since we have defined the type of num

console.log(addtwo(2));

function getUpper(val: string){
    return val.toUpperCase();
}

// getUpper(4)
// doesn't work because the function expects a string

console.log(getUpper("Hello World!"));


// passing default values
let addUser = (name:string, email:string, isActive:boolean = false) =>{
    console.log(name, email, isActive);
}

addUser("yash", "yash@gmail.com");
addUser("yash2", "yash2@gmail.com", true);

// handling return type

function add(a: number, b:number): number{
    return a+b;
}

console.log(add(1,2));

export {}