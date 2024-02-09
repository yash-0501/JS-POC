function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// Correct Way
// Once we pass anything the value type is locked, then return type automatically becomes that type
// Input Number -> Output: Number
function identityThree(val) {
    return val;
}
// identityThree(false)
function identityFour(val) {
    return val;
}
// This way we can define our own types and it passes on
// --------------------- Generics in Array ---------------------------
// here  the return Type is one of the value from that array docs
function searchDocs(docs) {
    var index = 3;
    console.log(docs.length);
    return docs[index];
}
var getMoreDocs = function (docs) {
    var index = 4;
    return docs[index];
};
// return a array
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// --------------------- Generics in Array ---------------------------
function anotherFunc(val1, val2) {
    return {
        val1: val1,
        val2: val2
    };
}
anotherFunc(3, 4);
function connectDB(val1, val2) {
    return {
        val1: val1,
        val2: val2,
    };
}
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (prod) {
        this.cart.push(prod);
    };
    Sellable.prototype.printCart = function () {
        console.log(this.cart);
    };
    return Sellable;
}());
var q = {
    name: "Quiz1",
    type: "Type1"
};
var q2 = {
    name: "Quiz2",
    type: "Type2"
};
var c1 = {
    name: "Course1",
    price: 200
};
var sell = new Sellable();
sell.addToCart(c1);
sell.addToCart(q);
sell.printCart();
sell.addToCart(q2);
sell.printCart();
