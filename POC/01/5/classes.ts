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


class User1 {
    protected _courseCount = 1
    readonly city: string = "Jaipur"
    constructor(public email: string, public name: string){
    }

    get getEmail(): string{
        return `myemail${this.email}`;
    }

    get courseCount(): number{
        return this._courseCount;
    }

    set courseCount(courseNum){
        this._courseCount = courseNum;
    }


}

class SubUser extends User1{
    isFam: boolean = true
    changeCourseCount(){
        this._courseCount = 2;
    }
}


const u1 = new User1("y@y.com","yash");

console.log(u1);