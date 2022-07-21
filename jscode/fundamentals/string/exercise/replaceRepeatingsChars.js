function replaceRepeatingsChars(str) {
  let res = str.split('');
  for (let i = 1; i < str.length; i++) {
    let previousLetter = str[i - 1];
    if (str[i] == previousLetter) {
      res[i] = ''
    }
  }
  console.log(res.join(''));
}
replaceRepeatingsChars('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddeeeedssaa');
