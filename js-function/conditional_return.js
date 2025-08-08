/*
function isEven(num) {
  if (num % 2 === 0) {
    return "Yah! It's Even";
  } else {
    return "Oh No! It's ODD";
  }
}

console.log(isEven(900));
console.log(isEven(901));
console.log(isEven(903));
console.log(isEven(906));
*/
function isEven(num) {
  if (num % 2 === 0) {
    return "Yah! It's Even";
  } else {
    return "Oh No! It's ODD";
  }
}

let numbers = [900, 901, 903, 906];
for (let num of numbers) {
  console.log(num + ": " + isEven(num));
}
