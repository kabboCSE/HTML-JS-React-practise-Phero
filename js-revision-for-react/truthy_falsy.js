// false value
// 0 -0 false null undefined

// true
// "kabbo" 78675 {} [] true

const test = "";

// if (test) {
//   console.log("Its Truthy");
// } else {
//   console.log("It's Falsy");
// }

// test ? console.log("Its Truthy") : console.log("It's Falsy");

const num = 21;
const result = num >= 10 && num < 20 ? "truuu" : "false";
// console.log(result);

const isActive = false;

const showUser = () => console.log("ShowUser");
const hideUser = () => console.log("hideUser");

isActive ? showUser() : hideUser();
