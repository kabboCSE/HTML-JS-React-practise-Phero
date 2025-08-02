//for of : array
//for in :  object

const mobile = {
  brand: "Samsung",
  model: "Note 12",
  ram: "12gb",
  display: "8 inchi",
  isNew: true,
};

for (let prop in mobile) {
  console.log("Proparty value is : ", prop);
  console.log("Key value is : ", mobile[prop]);
}
