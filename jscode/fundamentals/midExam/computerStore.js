function computerStore(data) {
  let i = 0;
  let command = data[i];
  i++;
   let price = 0;
  while (command !== "regular") {
    if (command === "special") {
      break;
    }
    let partPrice = Number(command);
    if (partPrice < 0) {
      console.log("Invalid price!");
      command = data[i];
        i++;
      continue;
    }
      price += partPrice;
command = data[i];
  i++;
  }
   let taxes = 0.2 * price;
    let totalPrice = price + taxes;
    if (command == "special") {
      totalPrice = totalPrice - (totalPrice * 0.1);
    }
  if (totalPrice == 0) {
    console.log("Invalid order!");
  } else{
    console.log(`Congratulations you've just bought a new computer!\n` 
    + `Price without taxes: ${price.toFixed(2)}$\n` 
 + `Taxes: ${taxes.toFixed(2)}$\n`+ `-----------\n`
  + `Total price: ${totalPrice.toFixed(2)}$`);
}
  
}

computerStore([

  '1023',
  
  '15',
  
  '-20',
  
  '-5.50',
  
  '450',
  
  '20',
  
  '17.66',
  
  '19.30',
  
  'regular'
  
  ])