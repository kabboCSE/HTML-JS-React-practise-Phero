fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

// const person = {
//   name: "kabbo",
//   fruit: "dalim",
//   dish: "halim",
//   friends: ["nishi", "saba", "selim"],
//   isRich: false,
//   money: 34000,
// };
// console.log(person);
// //JSON.stringify -> object to string/JSON
// //JSON.parse -> object

// const personJSON = JSON.stringify(person);
// console.log(personJSON);
