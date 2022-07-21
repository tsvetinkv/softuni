function strSubstring(word, sentence){
let toLower = sentence.toLowerCase();
let wordToLower = word.toLowerCase();
let wordsInSentence = toLower.split(" ");
for (const el of wordsInSentence) {
    if (el == wordToLower) {
        console.log(word);
        return
    }
}
console.log(`${word} not found!`);
}
strSubstring('Javascript',
'JavaScript is the best programming language')
