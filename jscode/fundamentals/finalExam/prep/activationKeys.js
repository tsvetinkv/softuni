function activationKeys(input) {
  let activationKey = input.shift();
  let line = input.shift();
  while (line !== "Generate") {
    let [command, paramOne, paramTwo, paramThree] = line.split(">>>");

    switch (command) {
      case "Slice":
        let [start, end] = [paramOne, paramTwo];
        let firstPart = activationKey.substring(0, start);
        let secondPart = activationKey.substring(end);
        activationKey = firstPart + secondPart;
        console.log(activationKey);
        break;

      case "Flip":
        let [typeLetter, startIndex, endIndex] = [
          paramOne,
          paramTwo,
          paramThree,
        ];
        let unchangedStart = activationKey.substring(0, startIndex);
        let unchangedEnd = activationKey.substring(endIndex);
        let part = activationKey.substring(startIndex, endIndex);
        if (typeLetter == "Upper") {
          part = part.toUpperCase();
        } else if (typeLetter == "Lower") {
          part = part.toLowerCase();
        }
        activationKey = unchangedStart + part + unchangedEnd;
        console.log(activationKey);
        break;

      case "Contains":
        if (activationKey.includes(paramOne)) {
          console.log(`${activationKey} contains ${paramOne}`);
        } else {
          console.log("Substring not found!");
        }
        break;
    }

    line = input.shift();
  }
  console.log(`Your activation key is: ${activationKey}`);
}

activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>abg",
  "Contains>>>deF",
  "Generate",
]);
//abghijklmnopqrstuvwxyz
// abgHIJKLMNOPQRstuvwxyz
// abgHIjkLMNOPQRstuvwxyz
// Substring not found!
// Substring not found!
// Your activation key is: abgHIjkLMNOPQRstuvwxyz

//time 32 minutes