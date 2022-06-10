function charactersInRange(char1, char2){
let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
let charsInRngeArray = [];
for(let i = startChar + 1; i < endChar; i++){
    let char = String.fromCharCode(i);
    charsInRngeArray.push(char);
}
console.log(charsInRngeArray.join(' '));
}charactersInRange('a','d')