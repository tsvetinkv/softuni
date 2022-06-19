function factorialDivision(num1, num2) {

function factorial(number) {
  if (number == 0) {
    return 1;
  }

  return number * factorial(number - 1);
}

let f1 = factorial(num1)
let f2 = factorial(num2)
let res = f1 / f2;
console.log(res.toFixed(2));
}factorialDivision(6, 2)

