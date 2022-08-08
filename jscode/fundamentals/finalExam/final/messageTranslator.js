function messageTranslator(input) {
  let n = input.shift();
  let regex = /!(?<command>[A-Z][a-z]{2,})!:\[(?<str>[A-z]{8,})\]/gm;
  n = Number(n);
  for (let i = 0; i < n; i++) {
    let match = regex.exec(input[i]);
    if (match == null) {
      console.log("The message is invalid");
    } else {
      let msg = match.groups["command"];
      let str = match.groups["str"];
      let nums = [];
      for (let j = 0; j < str.length; j++) {
        let n = str[j].charCodeAt(0);
        nums.push(n);
      }
      console.log(`${msg}: ${nums.join(" ")}`);
    }
  }
}
messageTranslator(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready"]);
