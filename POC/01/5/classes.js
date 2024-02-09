// class User1 {
//     public email: string
//     name: string
//     pincode: number = 0
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
//     private readonly city: string = "Jaipur"
// }
var User1 = /** @class */ (function () {
    function User1(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Jaipur";
    }
    return User1;
}());
var u1 = new User1("y@y.com", "yash");
console.log(u1);
