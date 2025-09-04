/* 
//Array validation
==============================
function arr(number) {
  if (Array.isArray(number) === false) {
    return "Please provide Array!";
  }
  const secondVal = [number[1]];
  return secondVal;
}
const result = arr(89);
console.log(result);
*/
//object validation
function getPrice(value) {
  if (typeof value !== "object") {
    return "Please provide an object!";
  }
  const result = value.price;
  return result;
}
const result = getPrice({ name: "Laptop", price: 30000 });
// const result = getPrice(45);
console.log(result);
