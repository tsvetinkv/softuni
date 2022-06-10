function magicSum(array, n) {
  let line;
  let valid = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == n) {
        line = `${array[i]} ${array[j]}`;
        console.log(line);
      }
    }
  }
}
magicSum([1, 2, 3, 4, 5, 6], 6);
