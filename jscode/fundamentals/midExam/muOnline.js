function muOnline(dungeonRooms) {
  let rooms = dungeonRooms.split("|");
  let command = "";
  let health = 100;
  let roomCount = 0;
  let bitcoins = 0;
  for (let el of rooms) {
    let commandAndNum = el.split(" ");
    command = commandAndNum.shift();
    let num = Number(commandAndNum.pop());

    if (command == "potion") {
      let amount = 100 - health;
      health += num;
      if (health > 100) {
        health = 100;
        console.log(`You healed for ${amount} hp.`);
      } else {
        console.log(`You healed for ${num} hp.`);
      }
      console.log(`Current health: ${health} hp.`);

      roomCount++;
    } else if (command == "chest") {
      bitcoins += num;
      console.log(`You found ${num} bitcoins.`);
      roomCount++;
    } else {
      let monster = command;
      health -= num;
      roomCount++;

      if (health > 0) {
        console.log(`You slayed ${monster}.`);
      } else {
        console.log(`You died! Killed by ${monster}.`);

        break;
      }
    }
  }

  if (health > 0) {
    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
  } else {
    console.log(`Best room: ${roomCount}`);
  }
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
console.log("----------------");
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
