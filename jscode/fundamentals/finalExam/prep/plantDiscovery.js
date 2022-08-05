function plantDiscovery(input) {
  let n = input.shift();
  let plants = {};
  let rate = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let [plant, rarity] = input[i].split("<->");
    plants[plant] = [Number(rarity), Number(rate), Number(count)];
  }

  for (let i = n; i < input.length; i++) {
    let command = input[i].split(":")[0];
    if (command == "Exhibition") {
      break;
    }
    let token = input[i].split(": ")[1];
    let plant = token.split(" - ")[0];
    switch (command) {
      case "Rate":
        let rate = token.split(" - ")[1];
        rate = Number(rate);
        if (plants.hasOwnProperty(plant)) {
          plants[plant][2] += 1;
          if (plants[plant][1] > 0) {
            plants[plant][1] += rate;
          } else {
            plants[plant][1] = rate;
          }
        } else {
          console.log("error");
        }

        break;
      case "Update":
        let newRarity = token.split("-")[1].trim();
        if (plants.hasOwnProperty(plant)) {
          plants[plant][0] = Number(newRarity);
        } else {
          console.log("error");
        }
        break;
      case "Reset":
        if (plants.hasOwnProperty(plant)) {
          plants[plant][1] = 0;
        } else {
          console.log("error");
        }
        break;
    }
  }
  console.log("Plants for the exhibition:");
  for (let [key, val] of Object.entries(plants)) {
    let rarity = val[0];
    let rating = val[1];
    let count = val[2];
    let avgRating = 0;

    avgRating = rating / count;

    console.log(`- ${key}; Rarity: ${rarity}; Rating: ${avgRating.toFixed(2)}`);
  }
}

plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rae: Woodii - 10",
  "Rae: Woodii - 10",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Rate: Woodii - 5",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
//time: 1 hour, points: 87;
