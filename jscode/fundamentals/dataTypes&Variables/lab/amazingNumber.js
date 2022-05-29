function amazingNumber(num) {
  let numToString = num.toString();
  let sum = 0;
  let isAmazing = false;
  for (let i = 0; i < numToString.length; i++) {
 
       sum += Number(numToString[i]);
  }
   let sumToString = sum.toString();
  for (let i = 0; i < sumToString.length; i++) {
    let currDigit = sumToString[i];
    if (currDigit == 9) {
      console.log(`${num} Amazing? True`);
      isAmazing = true;
      break;
    }
  }
  if (!isAmazing) {
    console.log(`${num} Amazing? False`);
  }
}
amazingNumber(1223);
