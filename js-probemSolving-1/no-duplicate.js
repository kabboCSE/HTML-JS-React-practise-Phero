/*
const strings = [
  "kabbo",
  "kabbo",
  "palash",
  "zebon",
  "remon",
  "alif",
  "palash",
];
function noDuplicate(string) {
  let unique = [];
  for (const string of strings) {
    if (unique.includes(string) === false) {
      unique.push(string);
    }
  }
  return unique;
}
const unique = noDuplicate(strings);
console.log("The unique array is : ", unique);
*/

const strings = [
  "kabbo",
  "kabbo",
  "palash",
  "zebon",
  "remon",
  "alif",
  "palash",
  "siam",
];
function noDuplicate(strings) {
  let unique = [];

  for (const string of strings) {
    while (unique.includes(string) === false) {
      unique.push(string);
    }
  }
  return unique;
}
const unique = noDuplicate(strings);
console.log("The unique array is : ", unique);
