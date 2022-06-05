function commonElements(arr1, arr2) {
  for (const el of arr1) {
    if (arr2.includes(el)) {
      console.log(el);
    }
  }
}
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],

  ["s", "o", "c", "i", "a", "l"]
);
