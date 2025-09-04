/*
*Max height
const height = [23, 56, 78, 45, 90, 60, 23, 110, 45, 89, 77];

function tallValue(height) {
  let max = height[0];
  for (const num of height) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
const max = tallValue(height);
console.log(max);
*/
//Min height

const height = [23, 56, 78, 45, 90, 60, 23, 110, 45, 89, 77];

function tallValue(height) {
  let min = height[0];
  for (const num of height) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}
const min = tallValue(height);
console.log(min);
