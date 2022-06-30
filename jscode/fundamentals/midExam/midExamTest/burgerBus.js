function burgerBus(input){
let citiesCount = Number(input.shift());
let profit = 0;
 let totalProfit = 0
for (let i = 1; i <= input.length + 2; i++){
    let cityAndTaxes = input.splice(0, 3);
 let city = cityAndTaxes.shift();
 let income = Number(cityAndTaxes.shift());
 let expences = Number(cityAndTaxes.shift());

   if (i % 3 == 0) {
    expences += expences * 0.5
   }
   if (i % 5 == 0) {
   income -= 0.1 * income;
   }
   profit = income - expences;
   console.log(`In ${city} Burger Bus earned ${profit.toFixed(2)} leva.`);
  
 totalProfit += profit;
}
console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`);
}
burgerBus(["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])
// In Lille Burger Bus earned 1025.40 leva.
// In Rennes Burger Bus earned 860.40 leva.
// In Reims Burger Bus earned -78.28 leva.
// In Bordeaux Burger Bus earned 4274.90 leva.
// In Montpellier Burger Bus earned 322.25 leva.
// Burger Bus total profit: 6404.67 leva.
