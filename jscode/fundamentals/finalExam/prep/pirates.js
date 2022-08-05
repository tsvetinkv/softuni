function pirates(input) {
  let line = input.shift();
  let targets = {};
  while (line != "Sail") {
    let [town, population, gold] = line.split("||");
    population = Number(population);
    gold = Number(gold);
    if (targets.hasOwnProperty(town)) {
      targets[town].population = targets[town].population + population;
      targets[town].gold = targets[town].gold + gold;
    } else {
      targets[town] = { population, gold };
    }

    line = input.shift();
  }

  let events = input.shift();
  while (events != "End") {
    let [command, town, data, dataTwo] = events.split("=>");

    switch (command) {
      case "Plunder":
        let people = Number(data);
        let stealGold = Number(dataTwo);

        targets[town].population = targets[town].population - Number(people);
        targets[town].gold = targets[town].gold - Number(stealGold);
        console.log(
          `${town} plundered! ${stealGold} gold stolen, ${people} citizens killed.`
        );
        if (targets[town].population <= 0 || targets[town].gold <= 0) {
          console.log(`${town} has been wiped off the map!`);
          delete targets[town];
        }
        break;
      case "Prosper":
        let goldToAdd = Number(data);

        if (goldToAdd <= 0) {
          console.log("Gold added cannot be a negative number!");
        } else {
          targets[town].gold = targets[town].gold + goldToAdd;
          console.log(
            `${goldToAdd} gold added to the city treasury. ${town} now has ${targets[town].gold} gold.`
          );
        }
        break;
    }

    events = input.shift();
  }
  let arr = Object.keys(targets);
  let count = arr.length;
  if (count > 0) {
    console.log(
      `Ahoy, Captain! There are ${count} wealthy settlements to go to:`
    );

    for (let [k, v] of Object.entries(targets)) {
      let p = v.population;
      let g = v.gold;
      console.log(`${k} -> Population: ${p} citizens, Gold: ${g} kg`);
    }
  } else {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  }
}
pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
//time 1 hour, points:92
//time 1 hour and 7 minutes, points: 100