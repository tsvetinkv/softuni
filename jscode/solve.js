function easterBake(input) {
    let index = 0;
    let cakes = +input[index++];
    let flourPack = 750;
    let sugarPack = 950;
    let maxFlour = 0;
    let maxSugar = 0;
    let flour = 0;
    let sugar = 0;
    let sugarNeeded = 0;
    let flourNeeded = 0;
   
    for (let i = 0; i < cakes; i++) {
      sugar = +input[index];
      sugarNeeded += sugar;
      if (sugar > maxSugar) {
        maxSugar = sugar;
      }
      index++;
      flour = +input[index++];
      flourNeeded += flour;
      if (flour > maxFlour) {
        maxFlour = flour;
      }
    }
   
    console.log(`Sugar: ${Math.ceil(sugarNeeded / sugarPack)}`);
    console.log(`Flour: ${Math.ceil(flourNeeded / flourPack)}`);
    console.log(
      `Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`
    );
  }
  
easterBake(["3", "400", "350", "250", "300", "450", "380"]);
//easterBake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);
