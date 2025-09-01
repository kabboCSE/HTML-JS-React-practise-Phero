// first100  -> 100
// 101 - 200 -> 90
// above 200 -> 70

function leyeredDiscount(quantity) {
  const first100 = 100;
  const second100 = 90;
  const remianing = 70;

  if (quantity <= 100) {
    const result = quantity * first100;
    return result;
  } else if (quantity <= 200) {
    const first100Price = first100 * 100;
    const remianingQuantity = quantity - 100;
    const remianingTotal = remianingQuantity * second100;
    const result = first100Price + remianingTotal;
    return result;
  } else {
    const first100Price = 100 * first100;
    const second100 = 100 * second100;
    const remianingQuantity = quantity - 200;
    const remianingTotal = remianingQuantity * remianing;
    const result = first100Price + second100 + remianingTotal;
    return result;
  }
}
const result = leyeredDiscount(105);
console.log(result);
