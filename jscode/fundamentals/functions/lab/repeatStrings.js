function repeatStrings(str, n) {
  let result = "";
  for (var i = 1; i <= n; i++) {
    result += str;
  }
  console.log(result);
}
repeatStrings("abc", 3);
