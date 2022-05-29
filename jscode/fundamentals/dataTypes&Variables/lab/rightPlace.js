function rightPlace(word1, char, word2) {
  let res = word1.replace('_', char);
if (res === word2) {
    console.log('Matched');
}else{
    console.log('Not Matched');
}
}
rightPlace('Str_ng', 'I','StrIng')