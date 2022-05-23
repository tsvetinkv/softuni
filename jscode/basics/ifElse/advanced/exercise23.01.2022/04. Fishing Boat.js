function fishingBoat(input) {
  const priceForSpring = 3000;
  const priceForSummerAndAutmn = 4200;
  const priceForWinter = 2600;
 
  const budget = Number(input[0]);
  const season = input[1];
  const countOfFishermen = Number(input[2]);
 
  let totalMoney = 0;
  switch (season) {
    case "Winter":
      totalMoney = priceForWinter;
      break;
    case "Spring":
      totalMoney = priceForSpring;
      break;
    case "Autumn":
    case "Summer":
      totalMoney = priceForSummerAndAutmn;
      break;
  }
  if (countOfFishermen <= 6) {
    totalMoney -= totalMoney * 0.1;
  } else if (countOfFishermen >= 7 && countOfFishermen <= 11) {
    totalMoney -= totalMoney * 0.15;
  } else if (countOfFishermen >= 12) {
    totalMoney -= totalMoney * 0.25;
  }
  if (countOfFishermen % 2 === 0 && season != "Autumn") {
    totalMoney -= totalMoney * 0.05;
  }
  if (budget >= totalMoney) {
    const moneyLeft = budget - totalMoney;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    const moneyNeeded = totalMoney - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
  }
}fishingBoat(["2000",
"Winter",
"13"])
