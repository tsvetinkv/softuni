function passChange(input) {
  let string = input.shift();
  let line = input.shift();
  while (line !== "Done") {
    let token = line.split(" ");
    let command = token.shift();
    switch (command) {
      case "TakeOdd":
        let newPass = [];
        for (let i = 1; i < string.length; i += 2) {
          newPass.push(string[i]);
        }
        string = newPass.join("");
        console.log(string);
        break;
      case "Cut":
        let [index, length] = token;

        let firstHalf = string.substring(0, index);
        let secondHalf = string.substring(Number(index) + Number(length));
        string = firstHalf + secondHalf;
        console.log(string);
        break;
      case "Substitute":
        let [substring, substitute] = token;
        if (string.includes(substring)) {
          while (string.includes(substring)) {
            string = string.replace(substring, substitute);
          }
          console.log(string);
        } else {
          console.log("Nothing to replace!");
        }
        break;
    }
    line = input.shift();
  }
  console.log(`Your password is: ${string}`);
}
passChange([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",

  "TakeOdd",

  "Cut 15 3",

  "Substitute :: -",

  "Substitute | ^",

  "Done",
]);
//icecream::hot::summer
//icecream::hot::mer
//icecream-hot-mer
//Nothing to replace!
//Your password is: icecream-hot-mer
//time: 26 minutes