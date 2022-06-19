function listOfProducts(arr) {
  let sortedList = arr.sort();
  console.log(sortedList);
  for (let i = 0; i < sortedList.length; i++) {
    console.log(`${i + 1}.${sortedList[i]}`);
  }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);

// 1.Apples 2.Onions 3.Potatoes 4.Tomatoes
