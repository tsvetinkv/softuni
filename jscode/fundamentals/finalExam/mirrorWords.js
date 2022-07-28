function mirrorWords(input) {
  let pattern = /(@|#)(?<word>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/gm;
  let wordPairs = /(@|#)(?<word>[A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gm;
  let text = input.join("");
  let matches = pattern.exec(text);
  let count = text.match(wordPairs);
  if (count) {
    console.log(count.length + ' word pairs found!');
    }else{
    console.log('No word pairs found!');
  }
 
  let validPairs = new Map();

  while (matches != null) {
    let element = matches.groups["word"];
        let nextElement = matches.groups["wordTwo"];
    if (element == reverseString(nextElement)) {
      validPairs.set(element, nextElement);
    }
    matches = pattern.exec(text)
  }
  
  let arr = Array.from(validPairs);
  
  if (arr.length > 0) {
    console.log("The mirror words are:");
    let buff = "";
     for (let i = 0; i < arr.length; i++) {
    buff += arr[i][0] + " <=> " + arr[i][1];
    if (i != arr.length - 1) {
      buff += ", ";
    }
  }
  console.log(buff);   
}else{
    console.log("No mirror words!");
}
  

  function reverseString(str) {
    let revArray = [];
    for (let i = str.length - 1; i >= 0; i--) {
      revArray.push(str[i]);
    }
    return revArray.join("");
  }
}

mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r"
]);
//време: 1 час и 20 минути