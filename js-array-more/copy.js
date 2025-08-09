/*

/////////////// Scenerio - 1 ////////
const products = [25, 25, 25];
const comp_products = products;

comp_products[1] = 87;

console.log(products);
console.log(comp_products);
*/

/*
/////////////// Scenerio - 2 ////////
let things = 45;
let comp_things = things;

comp_things = 90;

console.log(things);
console.log(comp_things);
*/

const numbers = [42, 36, 57, 89, 90];
// const new_numbers = Array.from(numbers); one way to copy array
// const new_numbers = [].concat(numbers);
const new_numbers = [...numbers];
numbers.push(100);

console.log(numbers);
console.log(new_numbers);
