function deerOfSanta(input){
//     •	Първи ред – брой дни, в които Дядо Коледа отсъства – цяло число в интервала [1…5000]
let daysOffSanta = Number(input[0]);
// •	Втори ред – оставена храна в килограми – цяло число в интервала [0…100000]
let foodinKg = Number(input[1]);
// •	Трети ред – храна на ден за първия елен в килограми – реално число в интервала [0.00…100.00]
let foodDayFor1Deer = Number(input[2]);
// •	Четвърти ред – храна на ден за втория елен в килограми– реално число в интервала [0.00…100.00]
let foodDayFor2Deer = Number(input[3]);
// •	Пети ред – храна на ден за третия елен в килограми – реално число в интервала [0.00…100.00]
let foodDayFor3Deer = Number(input[4]);
let totalFod1Deer = daysOffSanta * foodDayFor1Deer;
let totalFod2Deer = daysOffSanta * foodDayFor2Deer;
let totalFod3Deer = daysOffSanta * foodDayFor3Deer;
let totalNeededFood = totalFod1Deer + totalFod2Deer + totalFod3Deer;
if (foodinKg >= totalNeededFood) {
    let left = foodinKg - totalNeededFood
    console.log(`${Math.floor(left)} kilos of food left.`);
}else{
    let needed = totalNeededFood - foodinKg
    console.log(`${Math.ceil(needed)} more kilos of food are needed.`);
}
}deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])
