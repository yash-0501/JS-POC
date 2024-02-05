var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 10] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 11] = "WINDOW";
    SeatChoice[SeatChoice["BUSINESS"] = 12] = "BUSINESS";
})(SeatChoice || (SeatChoice = {}));
var seat = SeatChoice.BUSINESS;
var colors = 0 /* Color.Red */;
console.log(colors);
