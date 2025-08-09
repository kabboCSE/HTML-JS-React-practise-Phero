// const arr = [20, 10, 30];

// let sum = 0;
// for (const num of arr) {
//   sum = sum + num;
// }
// console.log(sum);

// Add all the loop's element using function

function sumOfAllElement(numbers) {
  console.log(numbers);
  let sum = 0;
  for (const num of numbers) {
    sum = sum + num;
  }
  return sum;
}

const sum = sumOfAllElement([20, 30, 10]);
console.log("Sum of all the elements of array : ", sum);
