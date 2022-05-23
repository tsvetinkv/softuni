function onTimeForTheExam(input){
const examHour = Number(input[0])
const examMin = Number(input[1])
const arivalHour = Number(input[2])
const arivalMin = Number(input[3])

const totalArivalMin = arivalHour * 60 + arivalMin
const totalExamMin = examHour * 60 + examMin
const differenceInTime = Math.abs(totalExamMin - totalArivalMin)
const hourDiff = Math.floor(differenceInTime / 60)
let minDiff = differenceInTime % 60
if(minDiff === 0 ||(minDiff < 10 && hourDiff > 0)){
minDiff =`0${minDiff}`
}
if(totalArivalMin === totalExamMin){
    console.log("On time");
}else if(totalArivalMin > totalExamMin && differenceInTime < 60){
 console.log("Late");
 console.log(`${minDiff} minutes after the start`);
}else if(totalArivalMin > totalExamMin && differenceInTime >= 60){
console.log("Late");
console.log(`${hourDiff}:${minDiff} hours after the start`);
}else if(differenceInTime <= 30){
    console.log("On time");
    console.log(`${minDiff} minutes before the start`);
}else if(differenceInTime > 30 && differenceInTime < 60){
    console.log("Early");
    console.log(`${minDiff} minutes before the start`);
}else if(differenceInTime > 30 && differenceInTime >= 60){
    console.log("Early");
    console.log(`${hourDiff}:${minDiff} hours before the start`);
}
}
onTimeForTheExam(["11",
"30",
"8",
"12"])
//Early
//3:18 hours before the start
onTimeForTheExam(["11",
"30",
"12",
"29"])
//Late
//59 minutes after the start

