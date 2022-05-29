function integerAndFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let sumToString = String(sum);
  let isint = false;
  for (let i = 0; i < sumToString.length; i++) {
    let current = sumToString[i];
    if (current === ".") {
      console.log(`${sum} - Float`);
      isint = true;
      break;
    }
  }
  
  if (!isint) {
    console.log(`${sum} - Integer`);
  }
  
}
integerAndFloat(9, 100, 1)
