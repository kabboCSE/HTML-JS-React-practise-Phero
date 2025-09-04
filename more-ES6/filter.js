const numbers = [56, 75, 54, 9, 1, 7, 3];
const greaterthan10 = numbers.filter((num) => num > 100);
const evenNumber = numbers.filter((num) => num % 2 === 0);
console.log(greaterthan10);
console.log("evennumber is : ", evenNumber);

const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven);
