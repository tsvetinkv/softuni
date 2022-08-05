function emojiDetector(input) {
  let regex = /(:{2}|\*{2})([A-Z][a-z]{2,})\1/g;
  let digits = /\d/g;
  let coolThreeshold = 0;
  let text = input.join("");
  let digitsInText = text.match(digits);
  let coolEmojis = [];
  coolThreeshold = digitsInText.reduce((a, b) => {
    return a * b;
  }, 1);
  console.log(`Cool threshold: ${coolThreeshold}`);
  let emojis = text.match(regex);
  let count = emojis.length;
  console.log(`${count} emojis found in the text. The cool ones are:`);
  for (let i = 0; i < emojis.length; i++) {
    let sum = 0;
    for (let j = 0; j < emojis[i].length; j++) {
      let letter = emojis[i][j];
      if (letter != ":" && letter != "*") {
        let num = letter.charCodeAt(0);
        sum += num;
      }
    }
    if (sum > coolThreeshold) {
      coolEmojis.push(emojis[i]);
    }
  }
  for (let emj of coolEmojis) {
    console.log(emj);
  }
}
emojiDetector([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
//time: 45 minutes and 40 seconds