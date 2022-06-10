function equalSum(arr) {
  let founIndex = "no";
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let l = 0; l < i; l++) {
      leftSum += arr[l];
    }
    for (let r = i + 1; r < arr.length; r++) {
      rightSum += arr[r];
    }

    if (leftSum === rightSum) {
      founIndex = i;
    }
  }
  console.log(founIndex);
}

equalSum([1, 4, 3, 2]);
