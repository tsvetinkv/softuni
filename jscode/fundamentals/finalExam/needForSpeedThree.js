function needForSpeedThree(input) {
  let n = Number(input.shift());
  let cars = {};
  for (let i = 0; i < n; i++) {
    let [model, mileage, fuel] = input[i].split("|");
    mileage = Number(mileage);
    fuel = Number(fuel);
    cars[model] = { mileage, fuel };
  }
  for (let i = n; i < input.length; i++) {
    if (input[i] == "Stop") {
      break;
    }

    let [command, car, dataOne, dataTwo] = input[i].split(" : ");
    switch (command) {
      case "Drive":
        let [distance, fuel] = [dataOne, dataTwo];

        if (cars[car].fuel > fuel) {
          cars[car].fuel = cars[car].fuel - fuel;
          cars[car].mileage = cars[car].mileage + Number(distance);

          console.log(
            `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
          );
          if (cars[car].mileage > 100000) {
            console.log(`Time to sell the ${car}!`);
            delete cars[car];
          }
        } else {
          console.log("Not enough fuel to make that ride");
        }
        break;
      case "Refuel":
        let fuelToRefuel = dataOne;
        if (cars[car].fuel + Number(fuelToRefuel) > 75) {
          fuelToRefuel = 75 - cars[car].fuel;
          cars[car].fuel = cars[car].fuel + Number(fuelToRefuel);
        } else {
          cars[car].fuel = cars[car].fuel + Number(fuelToRefuel);
        }
        console.log(`${car} refueled with ${fuelToRefuel} liters`);
        break;
      case "Revert":
        let kilometers = dataOne;
        cars[car].mileage = cars[car].mileage - kilometers;

        if (cars[car].mileage > 10000) {
          console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        } else {
          cars[car].mileage = 10000;
        }
        break;
    }
  }

  for(let [key, value] of Object.entries(cars)){
   let val = Object.values(value)
   let mil = val[0];
   let fu = val[1];
   console.log(`${key} -> Mileage: ${mil} kms, Fuel in the tank: ${fu} lt.`);

  }

}
needForSpeedThree([
  "3",

  "Audi A6|38000|62",

  "Mercedes CLS|11000|35",

  "Volkswagen Passat CC|45678|5",

  "Drive : Audi A6 : 543 : 47",

  "Drive : Mercedes CLS : 94 : 11",

  "Drive : Volkswagen Passat CC : 69 : 8",

  "Refuel : Audi A6 : 50",

  "Revert : Mercedes CLS : 500",

  "Revert : Audi A6 : 30000",

  "Stop",
]);
//Audi A6 driven for 543 kilometers. 47 liters of fuel consumed.
//Mercedes CLS driven for 94 kilometers. 11 liters of fuel consumed.
//Not enough fuel to make that ride
//Audi A6 refueled with 50 liters
//Mercedes CLS mileage decreased by 500 kilometers
//Audi A6 -> Mileage: 10000 kms, Fuel in the tank: 65 lt.
//Mercedes CLS -> Mileage: 10594 kms, Fuel in the tank: 24 lt.
//Volkswagen Passat CC -> Mileage: 45678 kms, Fuel in the tank: 5 lt.
// time: 56 minutes