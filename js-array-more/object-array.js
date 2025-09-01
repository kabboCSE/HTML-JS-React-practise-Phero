const employees = [
  { name: "kabbo", designation: "SQA Engineer", salary: 25000 },
  { name: "tuhin", designation: "Senior SQA Engineer", salary: 21000 },
  { name: "Selimvai", designation: "Software Engineer", salary: 50000 },
];
// console.log(employees);

for (const employee of employees) {
  const person = employee;
  const person_info = person.name;
  console.log(person_info, "" + person.designation);
  console.log("2nd index : ", employees[1]);
}
