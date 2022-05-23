function godzilla(input){
//     1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
let budget = Number(input[0])
// 2.	Брой на статистите – цяло число в интервала [1 … 500]
let statistCount = Number(input[1])
// 3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
let clothesPrice = Number(input[2])
// •	Декорът за филма е на стойност 10% от бюджета. 
let decor = 0.1 * budget
// •	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.
if(statistCount > 150){
    clothesPrice *= 0.90
}
let clothesSum = statistCount * clothesPrice 
let totalSum = decor + clothesSum
const difference = Math.abs(budget - totalSum)
if(totalSum > budget){
console.log("Not enough money!")    
console.log(`Wingard needs ${difference.toFixed(2)} leva more.`)
}else if(totalSum <= budget){
console.log("Action!")
console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`)
}
}godzilla(["15437.62",
"186",
"57.99"])
