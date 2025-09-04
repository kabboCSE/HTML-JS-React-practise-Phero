// const number = [2, 3, 4, 5, 6, 7];

// const add = (num1 = 5, num2 = 5) => num1 + num2;

// const doubled = number.map((x) => x * 2);

// console.log(doubled);
// console.log(add());

// const colleague = ["Kabbo", "Anis", "Amin"];
// const length = colleague.map((name) => name.length);
// console.log(length);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//first peram = value , 2nd peram = index, 3rd pearm = array
const count = numbers.map((num, test, arr) => {
  console.log(num, num * test, arr);
});
