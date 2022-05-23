function minutes(input){
    let hour = Number(input[0])
    let minute = Number(input[1])
     minute +=15
   if(minute >= 60){
  hour += 1
  minute -= 60
   }
    if(hour >=24){
   hour = 0
   }
  if(minute < 10){
    console.log(`${hour}:0${minute}`)
}else{
    console.log(`${hour}:${minute}`)
}
}
minutes(["0", "01"])
