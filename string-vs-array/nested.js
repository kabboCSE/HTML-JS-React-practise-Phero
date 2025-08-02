const college = {
  name: "DIU",
  semester: ["2nd", "3rd", "4rd", "5th"],
  unique: {
    color: "red",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};
// console.log(college.unique["color"]);
console.log(college.unique.result["merit"]);

college.unique.result["gpa"] = 4;
console.log(college);
