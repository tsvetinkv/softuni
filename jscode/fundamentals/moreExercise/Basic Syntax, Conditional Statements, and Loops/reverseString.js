function reverseString(string) {
  let buff = "";
  for (let i = string.length - 1; i >= 0; i--) {
    buff += string[i];
 }
 console.log(buff);
}
reverseString("12345");
