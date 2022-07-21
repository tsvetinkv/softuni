function tseamAccount(arr) {
  let account = arr.shift();
  let games = [];
  let accGames = account.split(" ");
  accGames.map((a) => {
    games.push(a);
  });
  for (const el of arr) {
    let [command, game] = el.split(" ");
    switch (command) {
      case "Install":
        if (!account.includes(game)) {
          games.push(game);
        }

        break;
      case "Uninstall":
        if (games.includes(game)) {
          let index = games.indexOf(game);
          games.splice(index, 1);
        }
        break;
      case "Update":
        if (games.includes(game)) {
          let index = games.indexOf(game);
          let addToLastPosition = games.splice(index, 1);
          games.push(addToLastPosition.join(""));
        }
        break;
      case "Expansion":
        let [gameName, expansion] = game.split("-");

        if (games.includes(gameName)) {
          let index = games.indexOf(gameName) + 1;
          let expansionName = `${gameName}:${expansion}`;
          games.splice(index, 0, expansionName);
        }
        break;
    }
  }
  console.log(games.join(" "));
}
tseamAccount([
  "CS WoW Diablo",

  "Install LoL",

  "Uninstall WoW",

  "Update Diablo",

  "Expansion CS-Go",

  "Play!",
]);

//We receive the account => CS, WoW, Diablo
//We Install LoL => CS, WoW, Diablo, LoL
//Uninstall WoW => CS, Diablo, LoL
//Update Diablo => CS, LoL, Diablo
//We add expansion => CS, CS:Go, LoL, Diablo
//We print the account.
