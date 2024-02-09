function detectType(val) {
    if (typeof val === 'string')
        return val.toLowerCase();
    return val + 2;
}
function provideID(id) {
    if (!id) {
        console.log("Please Provide id");
        return;
    }
    return id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function checkAccountType(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
var u1 = {
    name: "user1",
    email: "u@u.com"
};
var a1 = {
    name: "Admin",
    email: "u@u.com",
    isAdmin: false
};
var a2 = {
    name: "A2",
    email: "u@u.com",
    isAdmin: true
};
console.log(checkAccountType(u1));
console.log(checkAccountType(a1));
console.log(checkAccountType(a2));
// Anything which can be created using new keyword -- instance of comes into picture
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
var d = new Date();
logValue(d);
logValue("hellO wORLd!");
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    pet;
    return "Bird Food";
}
function getShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.kind == "square") {
        return Math.pow(shape.side, 2);
    }
    return shape.breadth * shape.length;
}
var sh = {
    kind: "rect",
    breadth: 40,
    length: 50
};
console.log(getShape(sh));
