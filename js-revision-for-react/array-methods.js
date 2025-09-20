const products = [
  { name: "Honor 400", brand: "Honor", price: 40000, color: "Black" },
  { name: "i Phone 14", brand: "i Phone", price: 80000, color: "Red" },
  { name: "Oppo Reno 8", brand: "Oppo", price: 30000, color: "Pink" },
  { name: "Honor 400", brand: "Honor", price: 50000, color: "purple" },
  { name: "Honor 400", brand: "Honor", price: 60000, color: "Black" },
];

//                         Map
// const result = products.map((product) => product.color);
// console.log(result);

// products.forEach((product) => console.log(product.name));

//                        filter
// const result = products.filter((product) => product.color === "Black");
// console.log(result);

//Find                     find
const result = products.find((product) => product.price === 30000);
console.log(result);
