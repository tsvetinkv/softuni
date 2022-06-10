function maxSequenceOfEqualElements(array) {
  let maxSequence = [];
  for (let i = 0; i < array.length; i++) {
    let current = [];
    for (let j = i; j < array.length; j++) {
      if (array[i] === array[j]) {
        current.push(array[i]);
      } else {
        break;
      }
    }
    if (current.length > maxSequence.length) {
      maxSequence = current;
    }
  }
  console.log(maxSequence.join(", "));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
