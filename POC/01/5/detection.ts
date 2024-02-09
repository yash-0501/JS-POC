function detectType(val: number | string){
    if(typeof val === 'string')
        return val.toLowerCase();
    return val + 2;
}


function provideID(id: string | null){
    if(!id){
        console.log("Please Provide id")
        return 
    }
    return id.toLowerCase();
}


function printAll(strs: string | string[] | null) {
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }


interface User{
    name: string,
    email: string
}

interface Admin extends User{
    isAdmin: boolean
}

function checkAccountType(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin;
    }
    return false;
}

const u1: User = {
    name: "user1",
    email: "u@u.com"
}
const a1: Admin = {
    name: "Admin",
    email: "u@u.com",
    isAdmin: false
}
const a2: Admin = {
    name: "A2",
    email: "u@u.com",
    isAdmin: true
}

console.log(checkAccountType(u1));
console.log(checkAccountType(a1));
console.log(checkAccountType(a2));


// Anything which can be created using new keyword -- instance of comes into picture

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
    }
  }

const d = new Date();
logValue(d);
logValue("hellO wORLd!")



// Type predicates

type Fish = {swim:() => void};
type Bird = {fly:() => void};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "Fish Food";
    }
    pet
    return "Bird Food";
}


interface Circle{
    kind: "circle"
    radius: number
}

interface Square{
    kind: "square"
    side: number
}

interface Rect{
    kind:"rect",
    length:number,
    breadth: number
}

type Shape = Circle | Square | Rect

function getArea(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2;
    }else if(shape.kind == "square"){
        return shape.side ** 2;
    }
        return shape.breadth * shape.length;
}

const sh: Shape = {
    kind: "rect",
    breadth: 40,
    length: 50
}

console.log(getArea(sh));


function area(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rect":
            return shape.breadth * shape.length;
        case "square":
            return shape.side ** 2;
        default:
            const _defaultShape: never = shape
            return _defaultShape
    }
}

// What if more shapes get added -- Triangle