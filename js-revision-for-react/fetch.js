const person = {
  name: "Kabbo",
  age: 25,
  friends: ["Kabbo", "Alif", "Zebon"],
  family: {
    fatherName: "Rohul Kayum",
    motherName: "Mst.Jesmin",
  },
};

// const jsonData = JSON.stringify(person);

// const planData = JSON.parse(jsonData);
// console.log(planData);

const keys = Object.keys(person);
console.log(keys);

console.log("============");
const values = Object.values(person);
console.log(values);
