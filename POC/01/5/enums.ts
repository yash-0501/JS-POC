enum SeatChoice {
    AISLE,
    MIDDLE = 10,
    WINDOW,
    BUSINESS
}

const seat = SeatChoice.BUSINESS
// we get only four choices AISLE MIDDLE WINDOW BUSINESS

// default value is 0
// if we assign any value to a choice then the choices after that increases from that value
// AISLE - 0
// MIDDLE - 10
// WINDOW - 11
// BUSINESS - 12

// We can also put in strings in the enums


// Enum values from different enum types are considered incompatible. For example,

const enum Status {
    Ready,
    Waiting,
  }
  const enum Color {
    Red,
    Blue = "Blue",
    Green = 0,
}

let colors: Color = Color.Red;

console.log(colors);
