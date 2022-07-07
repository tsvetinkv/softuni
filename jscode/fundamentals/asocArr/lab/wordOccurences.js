function wordOccurences(input) {
  let map = new Map();
  let count = 0;
  for (const word of input) {
    if (map.has(word)) {
      let oldCnt = map.get(word);
      let newCnt = oldCnt + 1;
      map.set(word, newCnt);
    } else {
      count = 1;
      map.set(word, count);
    }
  }
  let sortByCount = Array.from(map).sort((a, b) => b[1] - a[1]);
  for (let el of sortByCount) {
    console.log(`${el[0]} -> ${el[1]} times`);
  }
}
wordOccurences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",

  "Here",
  "is",
  "another",
  "sentence",
  "And",

  "finally",
  "the",
  "third",
  "sentence",
]);

//sentence -> 3 times
//Here -> 2 times
//is -> 2 times
//the -> 2 times
//first -> 1 times
//another -> 1 times
//And -> 1 times
//finally -> 1 times
//third -> 1 times
