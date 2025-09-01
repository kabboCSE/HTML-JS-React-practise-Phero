const person = {
  name: "kabbo",
  age: 22,
  salary: 23000,
  experience: 1,
};

for (const key in person) {
  const value = person[key];
  //   console.log(key, value);
}
const key = Object.keys(person);
for (const data of key) {
  const value = person[data];
  console.log(data);
  console.log(value);
}
// console.log(key);
