function shopping(input){
let budget = Number(input[0])
let videoCards = Number(input[1])
let procesors = Number(input[2])
let ram = Number(input[3])
let sumVideocard = videoCards * 250
let sumProcesors = 0.35 * sumVideocard
let sumRam =  0.10 * sumVideocard
let total = sumVideocard + procesors * sumProcesors + ram * sumRam
if(videoCards > procesors){
    total *= 0.85
}
const difference = Math.abs(total - budget).toFixed(2)
if(total <= budget){
  
    console.log(`You have ${difference} leva left!`)
} else{
    
    console.log(`Not enough money! You need ${difference} leva more!`)
}

}
shopping(["920.45",
"3",
"1",
"1"])

