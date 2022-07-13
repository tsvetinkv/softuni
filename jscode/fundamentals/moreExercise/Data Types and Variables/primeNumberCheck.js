function primeNumberCheck(num) {
  if (num % 1 == 0 && num % num == 0 && num % 2 != 0 && num % 3 != 0) {
    console.log("true");
  }else{
    console.log('false');
  }
}
primeNumberCheck(81);
