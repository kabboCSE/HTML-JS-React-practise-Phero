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
  localStorage.clear();
  const customer = {
    name: "Shahriar",
    age: 28,
    designation: "SQA",
    roll: "QA",
  };
  const customerJSON = JSON.stringify(customer);
  localStorage.setItem("customer", customerJSON);
};
// Have to use parse for get object
const getObjectTOLS = () => {
  const customerJSON = localStorage.getItem("customer");
  const customer = JSON.parse(customerJSON);
  console.log(customer.designation);
};
