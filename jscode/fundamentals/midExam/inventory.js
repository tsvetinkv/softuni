function inventory(array) {
  let collectingItems = array.shift().split(", ");
  while (array != "Craft!") {
    let commands = array.shift().split(" - ");
  let command = commands.shift();
  let item = commands.shift();
    switch (command) {
      case "Collect":
        if (collectingItems.includes(item)) {
          break;
        } else {
          collectingItems.push(item);
        }
        break;
      case "Drop":
        if (collectingItems.includes(item)) {
          collectingItems.splice(collectingItems.indexOf(item), 1);
        }
        break;
      case "Combine Items":
        let items = item.split(":");
        let oldItem = items.shift();
        let newItem = items.shift();
        if (collectingItems.includes(oldItem)) {
          collectingItems.splice(
            collectingItems.indexOf(oldItem) + 1,
            0,
            newItem
          );
        }
        break;
      case "Renew":
        if (collectingItems.includes(item)) {
          let element = collectingItems.splice(collectingItems.indexOf(item),1);
          let elToMove = element.join("");
          collectingItems.push(elToMove);
        }
        break;
    }
  }
  console.log(collectingItems.join(", "));
}
inventory(["Iron, Wood, Sword", "Collect - Gold'", "Drop - Wood", "Craft!"]);

inventory([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);
