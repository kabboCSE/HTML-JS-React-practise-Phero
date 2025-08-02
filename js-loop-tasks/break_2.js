/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let sum = 0;
for (i = 1; i <= 200; i++) {
  if (i >= 101) {
    break;
  }
  sum = sum + i;
  console.log(i);
  console.log("sum is", sum);
}
