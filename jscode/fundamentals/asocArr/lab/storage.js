function storage(input) {
  let store = new Map();
  for (let line of input) {
    let [product, quantity] = line.split(" ");

    if (!store.has(product)) {
      store.set(product, Number(quantity));
    } else {
      let oldQuantity = store.get(product);
      let newQuantity = Number(quantity) + oldQuantity;
      store.set(product, newQuantity);
    }
  }
  for (let [key, value] of store.entries()) {
    console.log(`${key} -> ${value}`);
  }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40", "tomatoes 5"]);
