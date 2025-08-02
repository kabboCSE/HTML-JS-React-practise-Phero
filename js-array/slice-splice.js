//slicing element -> (1 = from cutting, 4= the index before you want to cut)
const fruits = ["mango", "lichi", "jackfruit", "banana", "apple", "orrange"];
const gadget = ["mouse", "keyboard", "gpu", 990];

// console.log(fruits.slice(1, 4));
const firstSplice = fruits.splice(2, 2);
const secondSplice = fruits.splice(2, 2);
console.log("FirstSplice is : ", firstSplice);
console.log("SecondSplice is : ", secondSplice);
