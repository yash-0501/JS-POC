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

const getHello = (s: string): string =>{
    return "";
}

console.log(add(1,2));

// Will have to look into how to handle such scenarios where 2 or more types are returned
function getVal(myVal: number){
    if(myVal > 5)
        return true;
    return "200 OK";
}


// const heros = ["thor","spiderman", "ironman"]; // in the map hero is a string
// const heros = [3,2,1]; // in the map hero is a number - ts identifies automatically
const heros = [3,2,"Hero"]; // in the map hero is a number | number - ts identifies automatically

heros.map(hero =>{
    console.log(`Hero is ${hero}!`)
})

function consoleError(errmsg: string):void{
    console.log(errmsg);
}

// to handle errors use NEVER 
function handleError(errmsg: string):never{
    throw new Error(errmsg);
}

export {}