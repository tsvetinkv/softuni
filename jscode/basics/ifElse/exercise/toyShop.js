function toyShop(input){
    const puzzlePrice = 2.60
const dollPrice = 3
const bearPrice = 4.10
const minionPrice = 8.20
const truckPrice = 2
let vacationPrice = Number(input[0])
const puzzleCount = Number(input[1])
const dollCount = Number(input[2])
const bearCount = Number(input[3])
const minionCount = Number(input[4])
const truckCount = Number(input[5])
const toyCount = puzzleCount+dollCount+bearCount+minionCount+truckCount
let price = (puzzleCount*puzzlePrice)+(dollCount*dollPrice)+(bearCount*bearPrice)+(minionCount*minionPrice)+(truckCount*truckPrice)

if(toyCount >= 50){
 price = price * 0.75
}
price *= 0.90
const difference = Math.abs(price - vacationPrice)
if(price >= vacationPrice){
    console.log(`Yes! ${difference.toFixed(2)} lv left.`)
}else{

    console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`)
}
}




// Резултатът трябва да се форматира до втория знак след десетичната запетая.
// Сума: 20 * 2.60 + 25 * 3 + 30 * 4.10 + 50 * 8.20 + 10 * 2 = 680 лв.
// Брой на играчките: 20 + 25 + 30 + 50 + 10 = 135
// 135 > 50 => 25% отстъпка; 25% от 680 = 170 лв. отстъпка
// Крайна цена: 680 – 170 = 510 лв.
// Наем: 10% от 510 лв. = 51 лв.
// Печалба: 510 – 51 = 459 лв. 
// 459 > 40.8 => 459 – 40.8 = 418.20 лв. остават
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])

