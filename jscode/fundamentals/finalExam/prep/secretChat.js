function secretChat(input) {
  let str = input.shift();
  let line = input.shift();
  while (line != "Reveal") {
    let [command, substring, replacement] = line.split(":|:");
    switch (command) {
      case "ChangeAll":
        while (str.includes(substring)) {
          str = str.replace(substring, replacement);
        }
        console.log(str);

        break;

      case "Reverse":
        if (str.includes(substring)) {
          let i = str.indexOf(substring);
          let l = i + substring.length;
          let first = str.slice(0, i);
          let second = str.slice(l);
          let part = str.slice(i, l);
          let arr = [];
          for (let l of part) {
            arr.push(l);
          }
          let reverse = arr.reverse().join("");
          str = first + second + reverse;
          console.log(str);
        } else {
          console.log("error");
          console.log(str);
        }
        break;

      case "InsertSpace":
        let index = Number(substring);
        let first = str.slice(0, index);
        let second = str.slice(index);
        str = first + " " + second;
        console.log(str);
        break;
    }

    line = input.shift();
  }
  if(line == 'Reveal'){
    console.log(`You have a new text message: ${str}`);
  }
  
}

//time 40 minutes, score: 87/100
//time 53 minutes, score: 100/100