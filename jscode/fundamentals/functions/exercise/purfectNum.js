function perfectNum(num) {
//   let sum = 0;
//   if (num % 1 == 0) {
//     sum += 1
//   }
//   while (sum < num) {
  
//   if (num % 2 == 0) {
//     sum += 2;
//   }
//   if (num % 3 == 0) {
//     sum += 3;
//   }
//   if (num % 5 == 0) {
//     sum += 5;
//   }
//   if (num % 7=== 0) {
//     sum += 7;
//   }
// }
//   if (sum == num) {
//     console.log("perfect");
//   } else {
//     console.log("not perfect");
//   }



let sumOfDivisors = 1;
for (let currentNumber = 2; currentNumber < num; currentNumber++) {
if (num % currentNumber == 0) {
    sumOfDivisors += currentNumber;
    
}
}

if (sumOfDivisors == num) {
    console.log("perfect");
}else{
    console.log('Not perfect');
}

}
perfectNum(5343136);
