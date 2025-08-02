const age = 50;
const price = 1000;

if (age <= 12) {
  console.log("Price is free");
} else if (age >= 50) {
  //10% discount
  const discount = (price * 10) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else if (age >= 40) {
  //5% discount
  const discount = (price * 5) / 100;
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}
