console.log(1);
console.log(2);

const timeOutId = setInterval(() => {
  console.log(count++);
}, 2000);
const timeOutId2 = setInterval(() => {
  console.log(count++);
}, 2000);
console.log(4);
console.log(5);
