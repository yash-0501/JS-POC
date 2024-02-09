function identityOne(val: boolean | number): boolean | number{
    return val;
}

function identityTwo(val: any): any{
    return val;
}


// Correct Way
// Once we pass anything the value type is locked, then return type automatically becomes that type
// Input Number -> Output: Number
function identityThree<Type>(val: Type): Type{
    return val;
}

// identityThree(false)

function identityFour<T>(val: T): T{
    return val
}

// This way we can define our own types and it passes on


// --------------------- Generics in Array ---------------------------


// here  the return Type is one of the value from that array docs
function searchDocs<T>(docs: T[]): T {
    const index = 3
    console.log(docs.length)
    return docs[index];
}

const getMoreDocs = <T>(docs: T[]): T =>{
    const index = 4;
    return docs[index];
}

// return a array
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
  }
// --------------------- Generics in Array ---------------------------



function anotherFunc<T, U extends number>(val1: T,val2: U): object{
    return {
            val1,
            val2
        }

}

anotherFunc(3,4);



interface DB{
    connection: string,
    username: string,
    password: string
}

function connectDB<T,U extends DB>(val1:T, val2:U):object{
    return {
        val1,
        val2,
    }
} 

// connectDB(3,{})


// Class Types in Generics

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    price: number
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(prod: T){
        this.cart.push(prod)
    }

    printCart(){
        console.log(this.cart);
    }
}

const q: Quiz = {
    name:"Quiz1", 
    type:"Type1"
};
const q2: Quiz = {
    name:"Quiz2", 
    type:"Type2"
};
const c1: Course = {
    name:"Course1", 
    price:200
};


const sell = new Sellable();
sell.addToCart(c1);
sell.addToCart(q);
sell.printCart()
sell.addToCart(q2);
sell.printCart()