function calculator(num1, operator, num2) {
  let res = 0;
  switch (operator) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "/":
      res = num1 / num2;
      break;
  }
  console.log(res.toFixed(2));
}
calculator(
  5,

  "+",

  10
);
