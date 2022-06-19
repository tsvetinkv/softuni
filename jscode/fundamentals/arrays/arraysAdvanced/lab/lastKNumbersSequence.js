function lastKNumbersSequence(n, k) {
  let sequence = [1];
  for (let i = 1; i < n; i++) {
    let sequenceK = sequence.slice(-k);
    let sum = 0;
    for (let el of sequenceK) {
      sum += el;
    }
    sequence.push(sum);
  }
  console.log(sequence.join(" "));
}
lastKNumbersSequence(8, 2);
