function fancyBarcode(input) {
  let countBarcodes = Number(input.shift());
  let pattern = /(@#{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/gm;
  let groupPattern = /\d/gm;
  let group = "00";
  for (let i = 0; i < countBarcodes; i++) {
    let barcode = input[i];
    let match = barcode.match(pattern);
    if (match == null) {
      console.log("Invalid barcode");

      continue;
    }

    let newGroup = barcode.match(groupPattern);
    if (newGroup == null) {
      console.log(`Product group: ${group}`);
    } else {
      let productGropup = newGroup.reduce((a, b) => {
        return a + b;
      });

      console.log(`Product group: ${productGropup}`);
    }
  }
}
fancyBarcode([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
