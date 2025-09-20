const products = [
  { name: "Honor 400", brand: "Honor", price: 40000, color: "Black" },
  { name: "i Phone 14", brand: "i Phone", price: 80000, color: "Red" },
  { name: "Oppo Reno 8", brand: "Oppo", price: 30000, color: "Pink" },
  { name: "Honor 400", brand: "Honor", price: 50000, color: "purple" },
  { name: "Honor 400", brand: "Honor", price: 60000, color: "Black" },
];

const newData = {
  name: "Sony Z1",
  brand: "Sony",
  price: 42000,
  color: "Pink",
};

const newArray = [...products, newData];
console.log(newArray);

const remainingProduct = products.filter((p) => p.brand !== "Honor");
console.log(remainingProduct);
const newArray2 = [...remainingProduct, newData];
console.log(newArray2);
