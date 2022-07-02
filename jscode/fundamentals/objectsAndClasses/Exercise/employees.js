function employees(arr) {
  let obj = {};
  for (const el of arr) {
    let name = el;
    let personalNum = el.length;
    obj[name] = name;
    obj[personalNum] = personalNum;
    console.log(`Name: ${obj[name]} -- Personal Number: ${obj[personalNum]}`);
  }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
