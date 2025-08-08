// for a given string tell me whether it has even number of cheracters or not

function evenSizedString(str) {
  const size = str.length;
  console.log(str, size);
  if (str.length % 2 === 0) {
    console.log("This is even number string");
  } else {
    console.log("this is odd");
  }
}
evenSizedString("Kabboc");
