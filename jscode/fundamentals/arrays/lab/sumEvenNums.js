function sumEvenNums(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    let num = Number(arr[index]);
    if (num % 2 === 0) {
      sum += num;
    }
  }
  console.log(sum);
}
sumEvenNums(["3", "5", "7", "9"]);
