function decripting(input) {
  let msg = input.shift();
  let line = input.shift();
  while (line != "Finish") {
    let [command, dataOne, dataTwo] = line.split(" ");
    switch (command) {
      case "Replace":
        let curr = dataOne;
        let newChar = dataTwo;
        while (msg.includes(curr)) {
          msg = msg.replace(curr, newChar);
        }
        console.log(msg);
        break;

      case "Cut":
        let startInd = Number(dataOne);
        let endInd = Number(dataTwo);
        if (
          startInd >= 0 &&
          startInd < msg.length &&
          endInd >= 0 &&
          endInd < msg.length
        ) {
          let firstPart = msg.slice(0, startInd);
          let secondPart = msg.slice(endInd + 1);
          msg = firstPart + secondPart;
          console.log(msg);
        } else {
          console.log("Invalid indices!");
        }

        break;

      case "Make":
        let typeLetter = dataOne;
        if (typeLetter == "Upper") {
          msg = msg.toUpperCase();
        } else if (typeLetter == "Lower") {
          msg = msg.toLowerCase();
        }
        console.log(msg);
        break;

      case "Check":
        let str = dataOne;
        if (msg.includes(str)) {
          console.log(`Message contains ${str}`);
        } else {
          console.log(`Message doesn't contain ${str}`);
        }
        break;

      case "Sum":
        let startIndex = Number(dataOne);
        let endIndex = Number(dataTwo);
        if (
          startIndex >= 0 &&
          startIndex < msg.length &&
          endIndex >= 0 &&
          endIndex < msg.length
        ) {
          let string = msg.slice(startIndex, endIndex + 1);
          let sum = 0;
          for (let i = 0; i < string.length; i++) {
            sum += string[i].charCodeAt(0);
          }
          console.log(sum);
        } else {
          console.log("Invalid indices!");
        }

        break;
    }
    line = input.shift();
  }
}
decripting([
  "HappyNameDay",
  "Replace p r",
  "Make Lower",
  "Cut 2 23",
  "Sum -2 2",
  "Finish",
]);
