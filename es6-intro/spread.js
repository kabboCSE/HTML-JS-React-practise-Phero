const arr = [1, 56, 75, 34, 23];
// console.log(...arr);
const max = Math.max(...arr);
console.log(max);

const first = [23, 54, 767, 3456, 43];
const second = [...first];
const third = [12, ...second, 15];
console.log(second);
console.log(third);

// Spread in object
const person = { name: "kabbo", age: 27 };
const employee = { designation: "dev", ...person };
console.log(employee);
const nayikas = ["mousumi", "popy", "shabnur", "purnima"];

const array2 = ...nayikas;
console.log(array2);
