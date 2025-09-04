function avgOdd(array) {
  let sum = 0;
  let avg;
  for (const arr of array) {
    if (arr % 2 !== 0) {
      console.log(arr);

      sum = sum + arr;
      avg = sum / arr.length;
    }
  }
  return { sum, avg };
}

const array = [23, 24, 25, 26, 30, 55, 60, 96, 102, 101];
const result = avgOdd(array);

console.log(result.sum);
console.log(result.avg);
