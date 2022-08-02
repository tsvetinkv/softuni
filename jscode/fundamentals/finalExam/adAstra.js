function adAstra(input) {
  let text = input.join("");
  let regex =
  /([#|\|])(?<item>[A-Z\sa-z]+)\1(?<expiration>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/gm;

    let totalCal = 0;
    let foodInfo = [];
    let  match = regex.exec(text);

     while(match != null) {
    let food = match.groups['item'];
    let expirationDate = match.groups['expiration']
    let calories = match.groups['calories'];
    foodInfo.push({item: food, day: expirationDate, cal: calories });
    totalCal += Number(match[4])
        match = regex.exec(text);
     }

     console.log(`You have food to last you for: ${Math.floor(totalCal / 2000)} days!`);
     for (let i = 0; i < foodInfo.length; i++) {
         console.log(`Item: ${foodInfo[i].item}, Best before: ${foodInfo[i].day}, Nutrition: ${foodInfo[i].cal}`);
     }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]);
    //time: 58 minutes

    //time for 2 and 3 problem: 1 hour and 45 minutes.