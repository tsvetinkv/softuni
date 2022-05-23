function cinema(input){
    const type = input[0]
    const rows = Number(input[1])
    const cols = Number(input[2])
const premiere = 12.00
const normal = 7.50
const discount = 5.00
let finalmoney = 0
switch(type){
    case "Premiere": finalmoney = rows * cols * premiere;break;
    case "Normal": finalmoney = rows * cols * normal;break;
    case "Discount": finalmoney = rows * cols * discount;break;
}
console.log(`${finalmoney.toFixed(2)} leva`)
}
cinema(["Premiere",
"10",
"12"])

// •	Premiere – премиерна прожекция, на цена 12.00 лева.
// •	Normal – стандартна прожекция, на цена 7.50 лева.
// •	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
// Напишете функция, която приема тип прожекция (стринг), брой редове и брой колони в залата
//  (цели числа) и изчислява общите приходи от билети при пълна зала. Резултатът да се отпечата във 
//  формат като в примерите по-долу, с 2 знака след десетичната точка.  
