function rounding(num, precision){
if (precision > 15) {
    precision = 15;
}
let roundedNumber = num.toFixed(precision);
console.log(parseFloat(roundedNumber));
// console.log(typeof roundedNumber);
}rounding(3.1415926535897932384626433832795, 2)