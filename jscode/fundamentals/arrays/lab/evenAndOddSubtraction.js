function evenAndOddSubtraction(arr){
    let sumEven = 0;
    let sumOdd = 0;
for (let el of arr) {
    if (el % 2 === 0) {
        sumEven += el
    }else{
        sumOdd += el
    }
}
console.log(sumEven - sumOdd);
}evenAndOddSubtraction([1,2,3,4,5,6])