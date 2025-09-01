//Write a function to count the number of vowels in a string.

function findV(string) {
  let count = 0;
  for (let str of string) {
    if (vowels.includes(str)) {
      count += 1;
    }
  }
  return count;
}
const string = "shahriebo";
const vowels = "aeiouAeiou";
const count = findV(string);
console.log(count);
