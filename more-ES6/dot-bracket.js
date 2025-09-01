const student = {
  name: "Rafid",
  5: "Dhaka",
  "9-Home-address": "mirpur",
  1: 50,
  family: {
    title: "bhuyiah",
    // mother: {
    //     name: 'noor jahan',
    //     age: 45
    // }
  },
  "home-address": "kochu khet",
  marks: 90,
};

// console.log(student.family.title)
console.log(student.family.mother?.age);
console.log(student["9-Home-address"]);
