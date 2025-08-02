/*
 TERNARY --> three parts

     ?    :  

     condition ? do when it is true : false


     const age = 18;
age > 18 ? console.log("You can vote") : console.log(" You can not vote");


*/
// const price = 500;
// const isLeader = true;

// price = isLeader === true ? 0 : price + 100;
// console.log(price);

if (isLeader === true) {
  if (price > 1000) {
    price = price / 2;
  } else {
    price = 0;
  }
} else {
  price = price + 1000;
}
// price = isLeader === true ? price > 1000 ? price/2 : 0 :price + 1000;
price = isLeader === true ? 
                        (price > 1000 ?
                             price / 2 : 0) 
                    : price + 1000;

/*
const isPassed = false;
if (!isPassed) {
  console.log("Tore marum");
} else {
  console.log("Tore Marum na!");
}
  */

/*
=========================Type 2============================
const weight = 60;
const height = 1.65;

const bmi = weight / (height * height);

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
 */
 
