/*
 *Create function that will return only the even numbers
 */

function evenNum(numbers) {
  let arr = [];
  for (const num of numbers) {
    if (num % 2 === 0) {
      console.log(num);
      arr.push(num);
    }
  }
  return arr;
}
const arr = evenNum([23, 22, 45, 65, 77, 88, 90]);

console.log(arr);
