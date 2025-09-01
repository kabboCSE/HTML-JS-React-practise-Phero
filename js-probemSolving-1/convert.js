/*
function convertCMToInchi(num) {
  const cal = num / 12;
  const frac = num % 12;

  return { cal, frac };
}
// const cal = convertCMToInchi(77);
// console.log(cal);
const test = convertCMToInchi(75);
console.log(test.cal);
console.log(test.frac);
*/

function convertCMToInchi(num) {
  const cal = parseInt(num / 12);
  const frac = num % 12;
  const result = "Height is :" + cal + " feet " + frac + " inchi";
  return result;
}
const result = convertCMToInchi(77);
console.log(result);
