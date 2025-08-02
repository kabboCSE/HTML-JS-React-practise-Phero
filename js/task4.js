const score = 81;
const frnd_score = 40;

if (score > 80) {
  if (frnd_score > 80) {
    console.log("Go for lunch!");
  } else if (frnd_score < 80 && frnd_score >= 60) {
    console.log("good luck next time. ");
  } else if (frnd_score < 60 && frnd_score >= 40) {
    console.log("message unseen");
  } else if (frnd_score < 40) {
    console.log("block");
  }
} else {
  console.log("go to home and sleep and act sad");
}
