const person = {
  name: "Shahriar Kabbo",
  age: 28,
  profession: "Developer",
  salary: 25000,
  married: true,
  "fav places": ["Bandarban", "Kuwakata", "Saint Martin"],
};
//access by dot
console.log(person.age);

//access by third bracket
console.log(person["married"]);

console.log(person["fav places"]);

person["fav places"] = ["Bali", "New York", "Singapur"];
console.log(person);

const propName = "profession";
person[propName] = "DevOps";

console.log(person);
