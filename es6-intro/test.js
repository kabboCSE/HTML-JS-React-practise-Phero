function test(a, b) {
  console.log(arguments); // available
}
test(1, 2, 3); // [1, 2, 3]
