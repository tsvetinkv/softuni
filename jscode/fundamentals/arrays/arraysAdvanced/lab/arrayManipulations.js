function arrayManipulations(commands) {
  let arr = commands.shift().split(" ").map(Number);
  //let manipulation = commands.shift().split(" ");
  let index;
for (let i = 0; i <commands.length; i++) {
  let [command, firstNum, secondNum]= commands[i].split(" ");
  firstNum = Number(firstNum)
  secondNum = Number(secondNum)
  switch (command) {

    case "Add":
      arr.push(firstNum);

      break;

    case "Remove":
      // for (let el of arr) {
      //   if (manipulation[1] == el) {
      //     let i = arr.indexOf(el);
      //     arr.splice(i, 1);
      //   }
      //}
      arr= arr.filter(el => el != firstNum);
     
    break;

    case "RemoveAt":
     index = Number(firstNum);;
      arr.splice(index, 1);
     
      break;

    case "Insert":
      index = Number(secondNum);
      let num = Number(firstNum);
      arr.splice(index, 0, num);
      manipulation = commands;
      break;
  }
}
  console.log(arr.join(" "));

}

arrayManipulations([
  "4 19 2 53 6 43",

  "Add 3",

  "Remove 2",

  "RemoveAt 1",

  "Insert 8 3",
]); //4 53 6 8 43 3
