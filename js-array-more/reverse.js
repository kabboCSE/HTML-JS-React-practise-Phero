const fruits = ["apple", "mango", "lichi", "jackfruit", "Banana", "Dragon"];

console.log(fruits);
fruits.reverse();
console.log(fruits);

/*
Method - 1
=======================

let reverse = [];
for (let i = 0; i < fruits.length; i++) {
  reverse.unshift(fruits[i]);
}
console.log(reverse);
*/

/*
//Method -2

let reverse = [];
for (i = fruits.length - 1; i >= 0; i--) {
  reverse.push(fruits[i]);
}
console.log(reverse);

*/
