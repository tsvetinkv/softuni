function radioCrystals(array) {
  let neededThickness = array[0];

  for (let i = 1; i < array.length; i++) {
    let currentThickness = array[i];

    console.log(`Processing chunk ${currentThickness} microns`);

    let cutCount = 0;
    let lapCount = 0;
    let grindCount = 0;
    let etchCount = 0;

    while (currentThickness !== neededThickness) {
      while (currentThickness / 4 >= neededThickness) {
        currentThickness = currentThickness / 4;
        cutCount++;
      }
      if (cutCount > 0) {
        console.log(`Cut x${cutCount}`);
        console.log(`Transporting and washing`);
        currentThickness = Math.floor(currentThickness);
      }

      while (currentThickness - currentThickness * 0.2 >= neededThickness) {
        currentThickness = currentThickness - currentThickness * 0.2;
        lapCount++;
      }
      if (lapCount > 0) {
        console.log(`Lap x${lapCount}`);
        console.log(`Transporting and washing`);
        currentThickness = Math.floor(currentThickness);
      }

      while (currentThickness - 20 >= neededThickness) {
        currentThickness = currentThickness - 20;
        grindCount++;
      }
      if (grindCount > 0) {
        console.log(`Grind x${grindCount}`);
        console.log(`Transporting and washing`);
        currentThickness = Math.floor(currentThickness);
      }

      while (currentThickness - 2 >= neededThickness - 1) {
        currentThickness = currentThickness - 2;
        etchCount++;
      }
      if (etchCount > 0) {
        console.log(`Etch x${etchCount}`);
        console.log(`Transporting and washing`);
        currentThickness = Math.floor(currentThickness);
      }

      if (currentThickness < neededThickness) {
        currentThickness = currentThickness + 1;
        console.log(`X-ray x1`);
      }
    }
    console.log(`Finished crystal ${neededThickness} microns`);
  }
}
radioCrystals([1375, 50000]);
