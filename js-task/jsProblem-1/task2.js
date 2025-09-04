/*
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2

*/

function countNum(numbers) {
  let count = 0;
  for (let num of numbers) {
    if (num === 5) {
      count += 1;
    }
  }

  return count;
}
const numbers = [5, 6, 11, 12, 98, 5];
const count1 = countNum(numbers);
console.log(count1);
