function reverseAnArrayOfNumbers(n, array) {
  let res = [];
  for (let i = n - 1; i >= 0; i--) {
    res.push(array[i]);
  }
  console.log(res.join(" "));
}
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
