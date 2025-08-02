const weight = 60;
const height = 1.65;

const bmi = weight / (height * height);

// if (bmi < 18.5) {
//   console.log("you are underweight");
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//   console.log("you are normal");
// } else if (bmi >= 25 && bmi <= 29.9) {
//   console.log("you are overweight");
// } else {
//   console.log("you are obese.");
// }

category =
  bmi < 18.5
    ? "you are underweight"
    : bmi <= 24.9
    ? "you are normal"
    : bmi <= 29.9
    ? "you are overweight"
    : "you are obese.";
console.log(`Your BMI is: ${bmi}`);
console.log(category);
