function searchforANumber(arr1, arr2) {
  let numOfElements = arr2.shift();
  let deleteCount = arr2.shift();
  let searchedNum = arr2.shift();
  let newArr = arr1.slice(0, numOfElements);
  newArr.splice(0, deleteCount);
  let counter = 0;
  for (let el of newArr) {
    if (searchedNum == el) {
      counter++;
    }
  }

  console.log(`Number ${searchedNum} occurs ${counter} times.`);
}
searchforANumber(
  [5, 2, 3, 4, 1, 6],

  [5, 2, 3]
);

// "Number {number} occurs {count} times."