// const User = {
//     name: "Yash",
//     email: "yash@gmail.com",
//     isActive: true
// }

// // we strictly define how are input object should be like 
// const createUser = ({name: string, isPaid: boolean}) => {

// }  
// // createUser({name: "Yash", isPaid: false});

// let newUser = {name: "Yash", isPaid: false, email:"y@y.com"}

// createUser(newUser); // there are ways by which can make this email as optional


// const abc = ():{}=>{
//     return {}
// } // valid function returning object


// Type Alias in TS

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// // function createUser(user: User){}

// // createUser({name: "Yash", email:"", isActive: false});

// function createUser(user: User):User{
//     return {name: "", email:"", isActive: false};
// }


// readonly / optional '?'

type User = {
    readonly _id: number[],
    name: string,
    email: string,
    isActive: boolean,
    readonly ccDeatils?: number
}

let myUser: User = {
    _id: [1,2,3],
    name: "",
    email: "",
    isActive: false,
}

let myUser2: User = {
    _id: [1,2,3],
    name: "",
    email: "",
    isActive: false,
    ccDeatils: 48239127641
}

myUser.email = "user@email.com"
// myUser._id = "123"  //Cannot assign to '_id' because it is a read-only property.

myUser._id.push(12); // arrays can be appended with readonly
console.log(myUser);

export {}