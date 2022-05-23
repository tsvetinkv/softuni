function lunchBreak(input){
//     1.	Име на сериал – текст
const nameOfSeries = input[0]
// 2.	Продължителност на епизод  – цяло число в диапазона [10… 90]
const timeForEpisode = Number(input[1])
// 3.	Продължителност на почивката  – цяло число в диапазона [10… 120]
const lunchTime = Number(input[2])
// Време за обяд : 96 * 1/8 = 12.0
let timeForEating = (lunchTime * 1)/8
// Време за отдих : 96 * 1/4 = 24.0
let timeForRest = (lunchTime * 1)/4
// Останало време : 96 - 12 - 24 = 60
let remainingTime = Math.abs(lunchTime - timeForEating - timeForRest)
let difference = Math.abs(remainingTime - timeForEpisode)
if(remainingTime >= timeForEpisode){
console.log(`You have enough time to watch ${nameOfSeries} and left with ${Math.ceil(difference)} minutes free time.`)
}else{
    console.log(`You don't have enough time to watch ${nameOfSeries}, you need ${Math.ceil(difference)} more minutes.`)
}
}
// lunchBreak(["Game of Thrones",
// "60",
// "96"])
lunchBreak(["Teen Wolf","48","60"])
