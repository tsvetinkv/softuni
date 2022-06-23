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

//You healed for 10 hp.

// You slayed cat.
// You healed for 10 hp.
// Current health: 100 hp.
// You slayed orc.
// You found 10 bitcoins.
// You slayed snake.
// You found 110 bitcoins.
// You've made it!
// Bitcoins: 120
// Health: 65

// •	"potion"
// o	You are healed with the number in the second part.
//  But your health cannot exceed your initial health (100).
// o	First print: "You healed for {amount} hp."
// o	After that, print your current health: "Current health: {health} hp."
// •	"chest"
// o	You've found some bitcoins, the number in the second part.
// o	Print: "You found {amount} bitcoins."
// •	In any other case, you are facing a monster,
//  which you will fight. The second part of the room
//  contains the attack of the monster. You should remove the monster's attack from your health.
// o	If you are not dead (health <= 0), you've slain the monster,
//  and you should print: "You slayed {monster}."
// o	If you've died, print "You died! Killed by {monster}." and
// your quest is over. Print the best room you've manage to reach: "Best room: {room}"
// If you managed to go through all the rooms in the dungeon, print on the following three lines:
// "You've made it!"
// "Bitcoins: {bitcoins}"
// "Health: {health}"
