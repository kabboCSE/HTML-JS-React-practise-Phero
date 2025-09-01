// function declaration
function add(num1, num2) {
  return num1 + num2;
}
// function expression
const addition = function (num1, num2) {
  return num1 + num2;
};
const result = addition(10, 20);
console.log(result);

// arrow function
const mul = (num1, num2) => num1 * num2;

const resultMul = mul(2, 3);
console.log(resultMul);

//Arrow 2
const isFirstBig = (n1, n2) => n1 > n2;

const test = isFirstBig(46, 41);
console.log(test);

// Arrow function multiply line

const arrowF = (num1, num2) => {
  const doubeNum1 = num1 * num1;
  const doubeNum2 = num2 * num2;
  const addition = doubeNum1 + doubeNum2;
  return addition;
};
const newResult = arrowF(2, 4);
console.log("new result is :" + parseInt(newResult));

const obj = { foo: 1 };
obj.bar = 2;
console.log(obj);
