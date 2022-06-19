function sortAnArrayByTwoCriteria(arr) {
  let sorted = arr.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });
  console.log(sorted);
}
sortAnArrayByTwoCriteria(["alpha", "beta", "gamma"]);
