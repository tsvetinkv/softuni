function furniture(array){
let regex = />>(?<name>[A-Z][A-z]+)<<(?<price>[\d.]+)!(?<quantity>\d+)/gm;
let text = array.join("");
let productsNames = [];
let total = 0;
let matched
while ((matched = regex.exec(text)) !== null){
    let name = matched.groups['name'];
    let price = matched.groups['price'];
    let quantity = matched.groups['quantity'];
    let sumPrice = price * quantity;
    productsNames.push(name)
    total += sumPrice;
}
console.log('Bought furniture:');
if (productsNames.length > 0) {
   productsNames.map((el) => {console.log(el)})
}
console.log(`Total money spend: ${total.toFixed(2)}`);
}
furniture(['>Laptop<<312.2323!3',

'>TV<<300.21314!5',

'>Invalid<<!5',

'>TVo<<300.21314!20',

'>Invalid<!5',

'>TVl<<30.21314!5',

'>>Invalid<<!!5',

'Purchase']);