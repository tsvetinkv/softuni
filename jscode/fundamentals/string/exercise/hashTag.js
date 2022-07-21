function hashTag(input) {
  let split = input.split(" ");
  for (let i = 0; i < split.length; i++) {
    let toLower = split[i].toLowerCase();
    if (toLower.includes("#") && (toLower.charCodeAt(1) > 96 && toLower.charCodeAt(1) < 123)) {
        let wordWithoutHashTag = split[i].substring(1)
        console.log(wordWithoutHashTag);
    }
  }
}
hashTag("The symbol # is known #variously in English-speaking #regions as the #number sign");
