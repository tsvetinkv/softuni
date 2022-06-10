function orders(product, quantity) {
  let price = 0;
  switch (product) {
    case "coffee":
      price = 1.5;
      break;
    case "water":
      price = 1.0;
      break;
    case "coke":
      price = 1.4;
      break;
    case "snacks":
      price = 2.0;
      break;
  }
  let total = price * quantity;
  console.log(total.toFixed(2));
}
orders("coffee", 2);

// coffee - 1.50

// water - 1.00

// coke - 1.40

// snacks - 2.00
