function reverseInPlace(array) {
  let end = array.length - 1;
  for (let i = 0; i < end / 2; i++) {
    let temp = array[i];
    array[i] = array[end - i];
    array[end - i] = temp;
  }
  console.log(array.join(" "));
}
reverseInPlace(["a", "b", "c", "d", "e"]);
