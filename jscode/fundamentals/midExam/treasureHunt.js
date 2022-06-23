function treasureHunt(array) {
  let chest = array.shift().split("|");
  let i = 0;
  while (array[i] != "Yohoho!") {
    let line = array[i].split(" ");
    let command = line.shift();

    switch (command) {
      case "Loot":
        for (let el of line) {
          if (!chest.includes(el)) {
            chest.unshift(el);
          }
        }
        break;
      case "Drop":
        let index = Number(line);
        if (index < 0 || index >= chest.length) {
            i++;
            array[i] = array[i];
          continue;
        }else{
            let removedEl = chest.splice(index, 1).join("");
          chest.push(removedEl);

        }

        break;
      case "Steal":
        let count = Number(line);
        if (count > chest.length) {
        let removed = chest.splice(0, chest.length);
        console.log(removed.join(", "));
        } else {
          let removed = chest.splice(-count);
          console.log(removed.join(", "));
        }
        break;
    }

    i++;
    array[i] = array[i];
  }
if (chest.length <= 0) {
    console.log("Failed treasure hunt.");
}else {

  let elLength = chest.map((el) => el.length);
  let sum = 0;
  for (let el of elLength) {
    sum += el;
  }
  let avgTrsGain = sum / chest.length;
  console.log(`Average treasure gain: ${avgTrsGain.toFixed(2)} pirate credits.`);
}
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",

"Loot Wood Gold Coins",

"Loot Silver Pistol",

"Drop 3",

"Steal 16",

"Yohoho!"])