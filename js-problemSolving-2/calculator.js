function add(num1, num2) {
  return num1 + num2;
}
function subs(num1, num2) {
  return num1 - num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}
function calculator(a, b, operation) {
  if (operation === "addition") {
    const result = add(a, b);
    return result;
  } else if (operation === "substraction") {
    const result = subs(a, b);
    return result;
  } else if (operation === "multiply") {
    const result = mul(a, b);
    return result;
  } else if (operation === "division") {
    const result = div(a, b);
    return result;
  }
}
const output = calculator(10, 5, "division");
console.log(output);
