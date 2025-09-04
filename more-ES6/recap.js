//destructring
const student = {
  name: "kabbo",
  age: 26,
  marks: 82,
  location: "Bogura",
};

const { marks } = student;
console.log(marks);

const { age } = {
  name: "kabbo",
  age: 26,
  marks: 82,
  location: "Bogura",
};
console.log(age);
