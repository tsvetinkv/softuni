function processOddNumbers(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let smallestTwo = sortedArr.slice(0, 2)
  console.log(smallestTwo.join(' '));
}processOddNumbers([30, 15, 50, 5])
