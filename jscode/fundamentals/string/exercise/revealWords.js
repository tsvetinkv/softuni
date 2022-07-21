function revealWords(words, sentence) {
  let wordToReveal = words.split(", ");
  let template = sentence.split(" ");
  for (const word of wordToReveal) {
    for (let el of template) {
      if (el.includes("*") && el.length == word.length) {
       sentence =  sentence.replace(el, word);
    
      }
    }
  }
  console.log(sentence);
}
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
