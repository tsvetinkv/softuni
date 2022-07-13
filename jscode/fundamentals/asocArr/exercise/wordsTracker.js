function wordsTracker(array) {
  let wordOccurences = new Map();
  let searchedWords = array.shift().split(" ");
  for (let word of searchedWords) {
    wordOccurences.set(word, 0);
  }
  for (const line of array) {
    if (wordOccurences.has(line)) {
      let oldQuantity = wordOccurences.get(line);
      wordOccurences.set(line, oldQuantity + 1);
    }
  }
  let sort = Array.from(wordOccurences).sort(([keyA,valueA], [keyB,valueB]) => {
    return valueB - valueA
  })
  for(let el of sort) {
console.log(`${el[0]} - ${el[1]}`);
  }
  
}
wordsTracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence']);
