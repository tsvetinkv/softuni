function countStringOccurrences(sentence, word){
let split = sentence.split(" ");
let count = 0;
for(let w of split){
if(w == word){
    count++;
}
}
console.log(count);
}
countStringOccurrences('This is a word and it also is a is is is sentence',

'is')