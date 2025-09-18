// //function

// function add(a, b) {
//   const result = a + b;
//   return result;
// }
// const res = add(5, 10);
// console.log(res);

// //object

// friends = ["Kabbo", "Rahim", "Karim"];
// equipment = ["phone", "camera", 45];
// const person = {
//   name: "kabbo",
//   age: 22,
//   friends,
//   equipment,
// };
// console.log(person);

//arrow function
const sum = (...rest) => {
  console.log(rest);
};
sum(1, 2, 3);
