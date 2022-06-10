function simpleCalculator(num1, num2, operator) {
  switch (operator) {
    case "multiply":
    return  multiply(num1, num2);
      
    case "divide":
    return  divide(num1, num2);
   
    case "add":
    return add(num1, num2);

    case "subtract":
      return subtract(num1, num2);
  }

  function multiply(num1, num2) {
   console.log(num1 * num2);
  }
  function divide(num1, num2) {
    console.log(num1 / num2);
  }

  function add(num1, num2) {
console.log(num1 + num2);
  }
  function subtract(num1, num2) {
    console.log(num1 - num2);
  }
}
simpleCalculator(5, 2, "multiply");

/* let res;
  switch (operator) {
    case "multiply":
      res = num1 * num2;
      break;
    case "divide":
      res = num1 / num2;
      break;
    case "add":
      res = num1 + num2;
      break;
    case "subtract":
      res = num1 - num2;
      break;
  }
  console.log(res); */

/* let res;
 let multiply = (x, y) => x * y;
 let divide = (x, y) => x / y;
 let add = (x, y) => x + y;
 let subtract = (x, y) => x - y;
 switch(operator){
 case 'add':res = add(num1, num2)
     case 'subtract': res = subtract(num1, num2)
         case 'multiply': res = divide(num1, num2)
             case 'divide': res = multiply(num1, num2)
 }
 console.log(res);*/

/*
 let res;
 switch(operator){
    case 'add':res = (num1, num2) => num1 + num2; break;
        case 'subtract': res = (num1, num2) => num1 - num2; break;
            case 'multiply': res = (num1, num2) => num1 * num2; break;
                case 'divide': res = (num1, num2) => num1 / num2; break;
    }
    console.log(res(num1, num2));
    */
// }
// simpleCalculator(5, 2, 'multiply')
