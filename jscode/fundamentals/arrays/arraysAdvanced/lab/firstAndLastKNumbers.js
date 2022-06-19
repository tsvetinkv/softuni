function firstAndLastKNumbers(array) {
  let k = array.shift();

  let res1 = array.slice(0, k);
console.log(res1.join(" "));
let res2 = array.slice(-k)
console.log(res2.join(" "));
}
firstAndLastKNumbers([3, 6, 7, 8, 9]);
