function messagesManeger(input) {
  let capacity = input.shift();
  capacity = Number(capacity);
  let maneger = {};
  let line = input.shift();
  while (line != "Statistics") {
    let [command, name, data, dataTwo] = line.split("=");
    switch (command) {
      case "Add":
        let sent = Number(data);
        let received = Number(dataTwo);
        if (!maneger.hasOwnProperty(name)) {
          maneger[name] = [sent, received];
        }
        break;

      case "Message":
        let receiver = data;
        if (maneger.hasOwnProperty(name) && maneger.hasOwnProperty(receiver)) {
          maneger[name][0] = maneger[name][0] + 1;
          maneger[receiver][1] = maneger[receiver][1] + 1;
          let sumSender = maneger[name][0] + maneger[name][1];
          let sumReceiver = maneger[receiver][0] + maneger[receiver][1];
          if (sumSender >= capacity) {
            console.log(`${name} reached the capacity!`);
            delete maneger[name];
          }
          if (sumReceiver >= capacity) {
            console.log(`${receiver} reached the capacity!`);
            delete maneger[receiver];
          }
        }
        break;

      case "Empty":
        if (name == "All") {
          for (let el in maneger) {
            delete maneger[el];
          }
        } else {
          if (maneger.hasOwnProperty(name)) {
            delete maneger[name];
          }
        }
        break;
    }

    line = input.shift();
  }
  let arr = Object.keys(maneger);
  let count = arr.length;
  console.log(`Users count: ${count}`);
  for (let [k, v] of Object.entries(maneger)) {
    let sum = 0;
    for (let el of v) {
      sum += el;
    }
    console.log(`${k} - ${sum}`);
  }
}
messagesManeger([
  "10",
  "Add=Berg=9=0",
  "Add=Kevin=0=0",
  "Message=Berg=Kevin",
  "Add=Mark=5=4",
  "Statistics",
]);
