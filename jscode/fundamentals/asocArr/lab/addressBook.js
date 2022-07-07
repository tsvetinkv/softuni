function addressBook(input) {
  let addreses = {};
  for (const line of input) {
    let [name, address] = line.split(":");
    addreses[name] = address;
  }
  let elements = Object.entries(addreses);
  let sortedByName = elements.sort(([keyA, valueA], [keyB, valueB]) => {
    return keyA.localeCompare(keyB);
  });

  for (let [name, address] of sortedByName) {
    console.log(`${name} -> ${address}`);
  }
}
addressBook([
  "Tim:Doe Crossing",

  "Bill:Nelson Place",

  "Peter:Carlyle Ave",

  "Bill:Ornery Rd",
]);
