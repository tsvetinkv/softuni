function worldTour(input) {
  let stops = input.shift();
  let line = input.shift();
  while (line !== "Travel") {
    let elements = line.split(":");
    let command = elements.shift();
    switch (command) {
      case "Add Stop":
        let index = Number(elements[0]);
        let string = elements[1];
        if (index >= 0 || index <= stops.length) {
          let firstHalf = stops.slice(0, index);
          let secondHalf = stops.slice(index);
          stops = firstHalf + string + secondHalf;
          console.log(stops);
        } else {
          console.log(stops);
        }

        break;

      case "Remove Stop":
        let startIndex = Number(elements[0]);
        let endIndex = Number(elements[1]);
        if (!stops[startIndex] || !stops[endIndex]) {
          console.log(stops);
          break;
        }
        // let firstHalf = stops.slice(0, startIndex);
        // let secondHalf = stops.slice(endIndex + 1);
        // stops = firstHalf.concat(secondHalf);
        let subStr = stops.substring(startIndex, endIndex + 1);
        stops = stops.replace(subStr, "");
        console.log(stops);
        break;

      case "Switch":
        let oldStr = elements[0];
        let newStr = elements[1];
        if (stops.includes(oldStr)) {
          let regex = new RegExp(oldStr, "g");
          stops = stops.replace(regex, newStr);
          console.log(stops);
        } else {
          console.log(stops);
        }
        break;
    }
    line = input.shift();
  }

  console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour([
  "Hawai::Cyprys-Greece",

  "Add Stop:7:Rome",

  "Remove Stop:11:16",

  "Switch:Hawai:Bulgaria",

  "Travel",
]);
//Hawai::RomeCyprys-Greece
//Hawai::Rome-Greece
//Bulgaria::Rome-Greece
// Ready for world tour! Planned stops: Bulgaria::Rome-Greece
