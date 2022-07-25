function softUniBarIncome(arr) {
  let pattern =
    /%(?<name>[A-Z][a-z]+)%[^$%|.0-9]*<(?<product>\w+)>[^$%|.0-9]*\|(?<count>\d+)\|([^$%|.0-9]*)(?<price>\d+(\.\d+)?)\$/gm;
  let matches;
  let text = arr.join("");
  let total = 0;
  while ((matches = pattern.exec(text)) !== null) {
    let product = matches.groups["product"];
    let name = matches.groups["name"];
    let price = matches.groups["price"];
    let quantity = matches.groups["count"];
    let sum = Number(price) * Number(quantity);
    total += sum;
    console.log(`${name}: ${product} - ${sum.toFixed(2)}`);
  }
  console.log(`Total income: ${total.toFixed(2)}`);
}
softUniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",

  "%Peter%<Gum>1.3$",

  "%Maria%<Cola>|1|2.4",

  "%Valid%<Valid>valid|10|valid20$",

  "end of shift",
]);
