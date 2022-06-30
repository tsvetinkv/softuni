function taxCalculator(array) {
  let vecikles = array.shift().split(">>");
  let totalTax = 0;
  for (let i in vecikles) {
    let initialTax = 0;
    let split = vecikles[i].split(" ");
    let carType = split.shift();
    let year = Number(split.shift());
    let km = Number(split.shift());
    switch (carType) {
      case "family":
        initialTax = 50;
        for (let i = 0; i < year; i++) {
          initialTax -= 5;
        }

        while (km >= 3000) {
          initialTax += 12;
          km -= 3000;
        }
        console.log(`A ${carType} car will pay ${initialTax.toFixed(2)} euros in taxes.`);
        totalTax += initialTax;
        break;
      case "heavyDuty":
        initialTax = 80;
        for (let i = 0; i < year; i++) {
          initialTax -= 8;
        }

        while (km >= 9000) {
          initialTax += 14;
          km -= 9000;
        }

        console.log(`A ${carType} car will pay ${initialTax.toFixed(2)} euros in taxes.`);
        totalTax += initialTax;
        break;
      case "sports":
        initialTax = 100;
        for (let i = 0; i < year; i++) {
          initialTax -= 9;
        }

        while (km >= 2000) {
          initialTax += 18;
          km -= 2000;
        }

        console.log(`A ${carType} car will pay ${initialTax.toFixed(2)} euros in taxes.`);
        totalTax += initialTax;
        break;
      default:
        console.log("Invalid car type.");
    }
  }
console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);
}
taxCalculator(["family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410"]);
// A family car will pay 59.00 euros in taxes.
// Invalid car type.
// A heavyDuty car will pay 50.00 euros in taxes.
// A sports car will pay 118.00 euros in taxes.
// The National Revenue Agency will collect 227.00 euros in taxes.
