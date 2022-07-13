function partyTime(input) {
  // There is a party at SoftUni. Many guests are invited and they are two types:
  //  VIP and regular. When guests come to the party check if he/she contains in any of the two reservation lists.
  // The input will come as an array of strings. You will be given the list with the guests before you receive a command "PARTY".
  // All VIP numbers start with a digit.
  // When you receive the command "PARTY", the guests start coming.
  // Print the count of guests then all guests, who didn't come to the party (VIP must be printed first).

  let vip = [];
  let normal = [];
  let isParty = false;
  for (const el of input) {
    if (el == "PARTY") {
      isParty = true;
      continue;
    }
    let a = Number(el[0]);
    if (!isParty) {
      if (isNaN(a)) {
        normal.push(el);
      } else if (!isNaN(a)) {
        vip.push(el);
      }
    } else {
      let i = 0;
      if (isNaN(a)) {
        i = normal.indexOf(el);
        normal.splice(i, 1);
      } else {
        i = vip.indexOf(el);
        vip.splice(i, 1);
      }
    }
  }
  let count = normal.length + vip.length;
  console.log(count);
  vip.forEach((el) => console.log(el));
  normal.forEach((el) => console.log(el));
}

partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
//2 7IK9Yo0h tSzE5t0p
