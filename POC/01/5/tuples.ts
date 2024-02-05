let user: [string, number, boolean];
user = ["Yash", 22, true]
// user = [22, "Yash", true] // error oder of data is important

// example - rgb
let rgb: [number, number, number] = [233,123,211];


type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

// StringNumberBooleans describes a tuple whose first two elements are string and number respectively, but which may have any number of booleans following.
// StringBooleansNumber describes a tuple whose first element is string and then any number of booleans and ending with a number.
// BooleansStringNumber describes a tuple whose starting elements are any number of booleans and ending with a string then a number.
// A tuple with a rest element has no set “length” - it only has a set of well-known elements in different positions.

const a: StringNumberBooleans = ["hello", 1];
const b: StringNumberBooleans = ["beautiful", 2, true];
const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];