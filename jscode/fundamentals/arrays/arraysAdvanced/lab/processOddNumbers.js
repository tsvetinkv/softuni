function processOddNumbers(arr) {
  let oddPosition = [];
  let res = [];
for (let i = 0; i < arr.length; i++) {
  if (i % 2 != 0) {
    oddPosition.push(arr[i]);

  }
}
for (let el of oddPosition) {
  res.push(el * 2);
 
}
res.reverse();
 console.log(res.join(' '));
}
processOddNumbers([3, 0, 10, 4, 7, 3])
