var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    return TakePhoto;
}());
// const ya = new TakePhoto("ya", "ya")
var Insta = /** @class */ (function (_super) {
    __extends(Insta, _super);
    function Insta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Insta.prototype.getPhoto = function () {
        console.log("Photo!");
    };
    return Insta;
}(TakePhoto));
var i = new Insta("Panaroma", "False");
i.getPhoto();
console.log(i);
