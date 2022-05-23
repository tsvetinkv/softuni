function cleverLily(input){
    let age = Number(input[0]);
    let washingMashinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let money = 0;
    let startMoney = 10;
    let toycount = 0
    for(let i = 1; i <= age; i++){

if(i % 2 === 0){
    money += startMoney
    startMoney += 10;
    money--
}else{
toycount++;
}
    } 
money += toycount * toyPrice
let diff = Math.abs(money -washingMashinePrice)
if(money >= washingMashinePrice){
console.log(`Yes! ${diff.toFixed(2)}`);
}else{
    console.log(`No! ${diff.toFixed(2)}`);
}
}cleverLily(["10",
"170.00",
"6"])
//2-10   4-20   6-30  8-40   10 -50 = 150 - 5 = 145
//1-6 3-6 5-6 7-6 9-6 = 30             money = 30 + 145 = 175