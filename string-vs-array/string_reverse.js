const sentence = "I am Learning web";
/*
kabbo
k
ak
bak
bbak
obbak
*/

let reverse = "";
for (const letter of sentence) {
  reverse = letter + reverse;
}
console.log(reverse);
