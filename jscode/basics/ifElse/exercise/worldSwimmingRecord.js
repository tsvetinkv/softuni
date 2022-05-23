function worldSwimmingRecord(input){
//     Рекордът в секунди – реално число в интервала [0.00 … 100000.00] 
let record = Number(input[0])
//     Разстоянието в метри – реално число в интервала [0.00 … 100000.00] 
    let lenght = Number(input[1])
//     Времето в секунди, за което плува разстояние от 1 м. - реално число в интервала [0.00 … 1000.00] 
let time = Number(input[2])

// Иван трябва да преплува 1500 м.:  1500 * 20 = 30000 сек. 
let lenghtToSec = lenght * time
// На всеки 15 м. към времето му се добавят 12.5 сек.:  
let resistance= Math.floor(lenght / 15)
// 1500 / 15 = 100 * 12.5 = 1250 сек. 
// Общо време: 30000 + 1250 = 31250 сек. 
resistance *= 12.5
let sumtime = (lenghtToSec + resistance)
// 10464 < 31250 
if(record > sumtime){
console.log(`Yes, he succeeded! The new world record is ${sumtime.toFixed(2)} seconds.`)
}else{
    let differenc = record - sumtime
    console.log(`No, he failed! He was ${Math.abs(differenc).toFixed(2)} seconds slower.`)
}
// Времето, което не му е стигнало за да подобри рекорда:  

// 31250 – 10464 = 20786 сек. 
} worldSwimmingRecord(["10464",
    "1500",
    "20"])

