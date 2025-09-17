const addCart = () => {
  const getProduct = document.getElementById("product");
  const getQuantity = document.getElementById("quantity");
  const productValue = getProduct.value;
  const quantityValue = getQuantity.value;
  getProduct.value = "";
  getQuantity.value = "";

  console.log("Product Added", productValue, quantityValue);
  displayCart(productValue, quantityValue);
};

const displayCart = (e1, e2) => {
  const li = document.createElement("li");

  li.innerText = `${e1} : ${e2}`;

  const ul = document.getElementById("product-container");
  ul.appendChild(li);
};
