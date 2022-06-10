function mathPower(num, power) {
  // let number= Math.pow(num, power);
  // console.log(number);

  let res = 1;
  for (let i = 0; i < power; i++) {
    //     res = res * num
    res *= num;
  }
  console.log(res);

  // num ** power
  // console.log(num);
}
mathPower(2, 2);
