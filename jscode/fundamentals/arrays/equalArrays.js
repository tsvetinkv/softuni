function equalArrays(arr1, arr2) {
  let isIdentical = true;
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    let a = Number(arr1[i]);
    let b = Number(arr2[i]);
    sum += a
    if (a !== b) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isIdentical = false;
      break;
    }
  }

if (isIdentical) {
  console.log(`Arrays are identical. Sum: ${sum}`);
}
}
equalArrays(
  ["11", "20", "30"], ["10", "20", "30"]);
