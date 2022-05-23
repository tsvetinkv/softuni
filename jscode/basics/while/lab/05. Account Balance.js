function accBalance(input) {
    let index = 0;
    let balance = 0;
    let command = input[index];
    index++;
while(command !== "NoMoreMoney"){
let amound = Number(command)
if(amound < 0){
    console.log("Invalid operation!");
    break;
}
balance += amound;
console.log("Increase: " + amound.toFixed(2));
command = input[index];
index++;
}
console.log(`Total: ${balance.toFixed(2)}`);
}
accBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])
 
// Напишете функция, която пресмята колко общо пари има 
// в сметката, след като направите определен брой вноски.
//  Във всеки елемент ще получавате сумата, която трябва 
//  да внесете в сметката, до получаване на команда "NoMoreMoney" 
//  . При всяка получена сума на конзолата трябва да се извежда 
//  "Increase: " + сумата и тя да се прибавя в сметката. 
//  Ако получите число по-малко от 0 на конзолата трябва 
//  да се изведе "Invalid operation!" и програмата да приключи.
//   Когато програмата приключи трябва да се принтира "Total: " + общата сума в сметката.
//   Всички суми, които се печатат, трябва да се форматират до втория знак след десетичната запетая.
