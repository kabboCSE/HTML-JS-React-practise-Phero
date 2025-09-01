/*
function leapYear(num) {
  if (num % 4 === 0 && num % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}
const res = leapYear(2008);
console.log(res);
*/
function leapYear(res) {
  let leapyears = [];
  let nonleapyears = [];
  for (const arr of res) {
    if (arr % 4 === 0 && arr % 100 !== 0) {
      leapyears.push(arr);
    } else {
      nonleapyears.push(arr);
    }
  }
  return { leapyears, nonleapyears };
}

const res = [2000, 2004, 2005, 2009, 2012];

const result = leapYear(res);
console.log("leapyear is :", result.leapyears, "Done mama");
console.log("nonleapyear is :" + result.nonleapyears);
