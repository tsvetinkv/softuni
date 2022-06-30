function EnglishNameOfTheLastDigit(num){
    let nums = [];
    nums.push(num);
let digit = nums.shift().split('');
console.log(digit);
}EnglishNameOfTheLastDigit(512)