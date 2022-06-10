function maxNumber(arr) {
  let maxNums = [];

  for (let l = 0; l < arr.length; l++) {
    let isLargest = true;
    for (let r = l + 1; r < arr.length; r++) {
      if (arr[l] <= arr[r]) {
        isLargest = false;
      }
    }
    if (isLargest) {
      maxNums.push(arr[l]);
    }
  }

  console.log(maxNums.join(" "));
}
maxNumber([1, 4, 3, 2]);
