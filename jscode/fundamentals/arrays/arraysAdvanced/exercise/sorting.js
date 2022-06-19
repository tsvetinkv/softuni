function sortBigSmallNum(arr) {
  let newArray = [];
  arr.sort((a, b) => a - b);
  for (let el of arr) {
    let last = arr.pop();
    let first = arr.shift();
    newArray.push(last);
    newArray.push(first);
  }
  let reverse = arr.reverse();
  newArray.push(reverse[0]);
  newArray.push(reverse[1]);

  console.log(newArray);
}
sortBigSmallNum([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);

//94 1 69 2 63 3 52 18 31 21
