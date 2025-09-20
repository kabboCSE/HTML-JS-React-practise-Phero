//          Array Destructuring

const friends = ["Kabbo", "Remon", "Zibon"];
const [element1, element2, element3] = friends;

// console.log(element3);

//          Object  Destructuring

const person = {
  name: "Shahriar",
  age: 24,
  friend: ["kabbo", "Alif"],
  country: "UK",
};

const { name, friend, age, country } = person;

console.log(country, friend);
