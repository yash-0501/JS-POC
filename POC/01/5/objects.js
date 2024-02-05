"use strict";
// const User = {
//     name: "Yash",
//     email: "yash@gmail.com",
//     isActive: true
// }
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: [1, 2, 3],
    name: "",
    email: "",
    isActive: false,
};
myUser.email = "user@email.com";
// myUser._id = "123"  //Cannot assign to '_id' because it is a read-only property.
myUser._id.push(12);
console.log(myUser);
