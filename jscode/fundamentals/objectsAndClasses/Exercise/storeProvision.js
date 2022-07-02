function storeProvision(stock, delivery) {
  let store = {};
  for (let i = 0; i < stock.length; i += 2) {
    let product = stock[i];
    store[product] = Number(stock[i + 1]);
  }
  for (let i = 0; i < delivery.length; i += 2) {
    let product = delivery[i];
    if (!store.hasOwnProperty(product)) {
      store[product] = 0;
    }
    store[product] += Number(delivery[i + 1]);
  }

  for (const element of Object.keys(store)) {

    console.log(`${element} -> ${store[element]}`);
  }

}
storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);

