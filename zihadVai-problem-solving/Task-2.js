//Create a function sumOfArray which takes an array and returns the sum of that array. If the input is not an array and if any data not a number found in the array , it will return ‘Invalid’

function sumOfArray(arrs) {
  if (Array.isArray(arrs) === false) {
    return "Invalid";
  }
  let sum = 0;
  for (const arr of arrs) {
    if (typeof arr !== "number") {
      return "Invalid";
    }
    sum = sum + arr;
  }
  return sum;
}
const result = sumOfArray([45, "5", 5]);
console.log(result);
