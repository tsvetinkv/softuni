function oddAndEvenSumFromNumber(number){
    let numToString = number.toString();
    let oddSum = 0;
    let evenSum = 0;
    for(let i = 0; i < numToString.length; i++){
        if (Number(numToString[i]) % 2 == 0) {
            evenSum += Number(numToString[i])
        }else{
            oddSum += Number(numToString[i])
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}oddAndEvenSumFromNumber(1000435)