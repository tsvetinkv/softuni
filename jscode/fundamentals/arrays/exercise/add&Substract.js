function addAndSubstract(array) {
  let newArray = [];
  let sumOldArray = 0;
  let sumNewArray = 0;
  for (let i = 0; i < array.length; i++) {
    sumOldArray += array[i];
    if (array[i] % 2 === 0) {
      array[i] += i;
      sumNewArray += array[i];
      newArray.push(array[i]);
    } else {
      array[i] -= i;
      sumNewArray += array[i];
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
  console.log(sumOldArray);
  console.log(sumNewArray);
}
addAndSubstract([5, 15, 23, 56, 35]);
