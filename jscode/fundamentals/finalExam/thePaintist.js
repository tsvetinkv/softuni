function thePaintist(input) {
  let n = Number(input.shift());
  let pieces = {};
  for (let i = 0; i < n; i++) {
    let [piece, composer, key] = input[i].split("|");
    pieces[piece] = [composer, key];
  }
  let line = input.shift();
  while (line != "Stop") {
    let [command, piece, composer, key] = line.split("|");
    switch (command) {
      case "Add":
        if (!pieces.hasOwnProperty(piece)) {
          pieces[piece] = [composer, key];
          console.log(
            `${piece} by ${composer} in ${key} added to the collection!`
          );
        } else {
          console.log(`${piece} is already in the collection!`);
        }
        break;
      case "Remove":
        if (pieces.hasOwnProperty(piece)) {
          delete pieces[piece];
          console.log(`Successfully removed ${piece}!`);
        } else {
          console.log(
            `Invalid operation! ${piece} does not exist in the collection.`
          );
        }
        break;
      case "ChangeKey":
        let newKey = composer;
        if (pieces.hasOwnProperty(piece)) {
          pieces[piece][1] = newKey;
          console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
          console.log(
            `Invalid operation! ${piece} does not exist in the collection.`
          );
        }
        break;
    }
    line = input.shift();
  }

  for (let [key, val] of Object.entries(pieces)) {
    val = val.join(" ");
    val = val.split(" ");
    let composer = val.shift();
    let minor = val.join(" ");

    console.log(`${key} -> Composer: ${composer}, Key: ${minor}`);
  }
}
thePaintist([
  "3",

  "Fur Elise|Beethoven|A Minor",

  "Moonlight Sonata|Beethoven|C777 Minor",

  "Clair de Lune|Debussy|C# Minor",

  "Add|Sonata No.2|Chopin|B Minor",

  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",

  "Add|Fur Elise|Beethoven|C# Minor",

  "Remove|Clair de Lune",

  "ChangeKey|Moonlight Sonata|C# Major",

  "ChangeKey|Maonlight Sonata|C# Major",

  "Stop",
]);
