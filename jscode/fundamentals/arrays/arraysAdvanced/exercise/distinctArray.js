function distinctArray(array) {
  let result = [];
  for (let el of array) {
    if (!result.includes(el)) {
      result.push(el);
    }
  }
  console.log(result.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
