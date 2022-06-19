function train(array) {
  let wagon = array.shift().split(" ").map(Number);
  let maxContOfPeopleInwagon = Number(array.shift());
  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");
    if (command.includes("Add")) {
      wagon.push(Number(command[1]));
    } else {
      for (let j = 0; j < wagon.length; j++) {
        if (wagon[j] + Number(command) <= maxContOfPeopleInwagon) {
          wagon[j] += Number(command);
          break;
        }
      }
    }
  }
  console.log(wagon.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
