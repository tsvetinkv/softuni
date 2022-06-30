function smallestTwoNumbers(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let smallestTwo = sortedArr.slice(0, 2)
    console.log(smallestTwo.join(' '));
  }
  smallestTwoNumbers()