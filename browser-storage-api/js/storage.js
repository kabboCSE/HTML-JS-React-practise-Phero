const addtoLocalStorage = () => {
  const number = Math.ceil(Math.random() * 100);
  console.log(number);
  localStorage.setItem("Number", number);
};

const getNumberfromLS = () => {
  const number = localStorage.getItem("Number");
  console.log("Read Number from local storage ", number);
};

// Have to use stringify for set object
const setObjectTOLS = () => {
  const customer = { name: "Shahriar", age: 28 };
  const customerJSON = JSON.stringify(customer);
  localStorage.setItem("customer", customerJSON);
};

const getObjectTOLS = () => {
  const customer = { name: "Shahriar", age: 28 };
  const customerJSON = JSON.parse(customer);
  localStorage.setItem("customer", customerJSON);
};
