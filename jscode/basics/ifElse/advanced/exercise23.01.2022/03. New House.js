function flowers(input){
    const typeFlowers = input[0]
    const flowersCount = Number(input[1])
let budget = Number(input[2])
let price = 0
switch(typeFlowers) {
    case "Roses": price += 5 * flowersCount; 
    if(flowersCount > 80){
        price -= flowersCount * 5.00 * 0.1
    }break;
    case "Dahlias": price += 3.80 * flowersCount;
if(flowersCount > 90){
    price -= flowersCount * 3.80 * 0.15
} break;
    case "Tulips": price += 2.80 * flowersCount; 
if(flowersCount > 80){
    price -= flowersCount * 2.80 * 0.15 
}break;
    case "Narcissus": price += 3 * flowersCount; 
if(flowersCount < 120){
    price += flowersCount * 3.00 * 0.15
}break;
    case "Gladiolus": price += 2.50 * flowersCount; 
    if(flowersCount < 80){
        price += 2.50 * flowersCount * 0.20
    }break;
}

if(budget >= price ){
    const moneyLeft = budget - price
    console.log(`Hey, you have a great garden with ${flowersCount} ${typeFlowers} and ${moneyLeft.toFixed(2)} leva left.`)
}else{
    const moneyLeft = price - budget
    console.log(`Not enough money, you need ${(moneyLeft).toFixed(2)} leva more.`)
}

}flowers(["Roses",
"55",
"250"])
flowers(["Tulips",
"88",
"260"])
flowers(["Narcissus",
"119",
"360"])
