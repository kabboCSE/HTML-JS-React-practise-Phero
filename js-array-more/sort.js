const element = [900, 100, 20, 50, 300];
// const element = [6, 1, 8, 2, 3, 5];
element.sort((a, b) => b - a);
console.log(element);

///////         New Method for sorting         ////////

//Ascending
const num = [460, 920, 30, 60, 90, 80, 90, 555];
const sort = num.sort(function (a, b) {
  return a - b;
});
console.log("New sorting Ascending : ", sort);

//Descending

// const num = [460, 920, 30, 60, 90, 80, 90, 555];
const descSort = num.sort(function (a, b) {
  return b - a;
});
console.log("New sorting Descending : ", descSort);
