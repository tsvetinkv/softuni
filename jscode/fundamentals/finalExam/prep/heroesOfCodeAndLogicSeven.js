function heroesOfCodeAndLogicSeven(input) {
  let n = input.shift();
  let heroes = {};
  for (let i = 0; i < n; i++) {
    let [name, hp, mp] = input[i].split(" ");
    hp = Number(hp);
    mp = Number(mp);
    heroes[name] = { hp, mp };
  }

  for (let i = n; i < input.length; i++) {
    if (input[i] == "End") {
      break;
    }
    let [command, heroName, dataTwo, dataThree] = input[i].split(" - ");
    switch (command) {
      case "Heal":
        let amount = dataTwo;
        amount = Number(amount);

        if (heroes[heroName]) {
          if (heroes[heroName].hp + amount > 100) {
            amount = 100 - heroes[heroName].hp;
          }
          heroes[heroName].hp = heroes[heroName].hp + amount;
          console.log(`${heroName} healed for ${amount} HP!`);
        }

        break;

      case "Recharge":
        let quantity = dataTwo;
        quantity = Number(quantity);

        if (heroes[heroName]) {
          if (heroes[heroName].mp + quantity > 200) {
            quantity = 200 - heroes[heroName].mp;
          }
          heroes[heroName].mp = heroes[heroName].mp + quantity;
          console.log(`${heroName} recharged for ${quantity} MP!`);
        }
        break;

      case "CastSpell":
        let mpNeeded = dataTwo;
        let spell = dataThree;
        mpNeeded = Number(mpNeeded);

        if (heroes[heroName]) {
          if (heroes[heroName].mp >= mpNeeded) {
            heroes[heroName].mp = heroes[heroName].mp - mpNeeded;
            console.log(
              `${heroName} has successfully cast ${spell} and now has ${heroes[heroName].mp} MP!`
            );
          } else {
            console.log(
              `${heroName} does not have enough MP to cast ${spell}!`
            );
          }
        }
        break;

      case "TakeDamage":
        let damage = dataTwo;
        damage = Number(damage);
        let attaker = dataThree;

        if (heroes[heroName]) {
          heroes[heroName].hp = heroes[heroName].hp - damage;
          if (heroes[heroName].hp > 0) {
            console.log(
              `${heroName} was hit for ${damage} HP by ${attaker} and now has ${heroes[heroName].hp} HP left!`
            );
          } else {
            console.log(`${heroName} has been killed by ${attaker}!`);
            delete heroes[heroName];
          }
        }
        break;
    }
  }
  for (let [k, v] of Object.entries(heroes)) {
    let heal = v.hp;
    let mana = v.mp;
    console.log(k);
    console.log(` HP: ${heal}`);
    console.log(` MP: ${mana}`);
  }
}
heroesOfCodeAndLogicSeven([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 1000000",
  "Recharge - Adela - 100000",
  "CastSpell - Tyris - 1000000 - Fireball",
  "TakeDamage - Tyris - 10000 - Fireball",
  "TakeDamage - Ivor - 1000 - Mosquito",
  "End",
]);
//47 minutes, score: 73/100
//1 hour and 3 minutes, score:100/100