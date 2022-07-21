function pascalCaseSplitter(str) {
  let buff = "";
  let arr = [];
  for (let letter of str) {
    let upperCase = letter.toUpperCase();
    if (upperCase == letter) {
      buff += ` ${letter}`;
    } else {
      buff += `${letter}`;
    }
  }
 let words = buff.trimStart().split(' ');
 for (const el of words) {
   arr.push(el);
 }
console.log(arr.join(', '));
}
pascalCaseSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
