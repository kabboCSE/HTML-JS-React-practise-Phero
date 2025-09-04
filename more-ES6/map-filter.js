const students = [
  { id: 452, name: "kabbo", marks: 82 },
  { id: 456, name: "siam", marks: 72 },
  { id: 789, name: "rafiq", marks: 62 },
  { id: 393, name: "rahim", marks: 80 },
];

const gpa5 = students.map((student) => student.marks >= 80);
const gpaFilter = students.filter((student) => student.marks >= 80);
console.log(gpa5);
console.log(gpaFilter);
