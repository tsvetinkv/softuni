function walking(input){
    let index = 0;
    let goal = 10000;
    let command = input[index];
    index++;
    let stepsCount = 0;
    while(command !== 'Going home'){
        let steps = Number(command);
         stepsCount += steps
        if (stepsCount >= goal) {
            let stepsOverTheGoal = Math.abs(stepsCount - goal);
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsOverTheGoal} steps over the goal!`);
            break;
        }
        command = input[index];
        index++;
    }
   
    if(command === 'Going home'){
        let stepsLeft = Number(input[index]);
        index++;
        stepsCount += stepsLeft
        if(stepsCount >= goal) {
             let stepsOverTheGoal = Math.abs(stepsCount - goal);
            console.log(`Goal reached! Good job!`);
            console.log(`${stepsOverTheGoal} steps over the goal!`);
        
        }else{
            let stepsNotEnough = Math.abs(goal - stepsCount)
            console.log(`${stepsNotEnough} more steps to reach goal.`);
        }
    }
}walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])


// Габи иска да започне здравословен начин на живот 
// и си е поставила за цел да върви 10 000 стъпки всеки ден.
//  Някои дни обаче е много уморена от работа и ще иска да се
//   прибере преди да постигне целта си. Напишете функция, 
//   която чете от масив по колко стъпки изминава тя всеки път
//    като излиза през деня и когато постигне целта си да се 
//    изписва "Goal reached! Good job!" и колко стъпки повече
//     е извървяла "{разликата между стъпките} steps over the goal!"
// Ако иска да се прибере преди това, тя ще въведе командата "Going home"
//  и ще въведе стъпките, които е извървяла докато се прибира.
//   След което, ако не е успяла да постигне целта си,
//    на конзолата трябва да се изпише: "{разликата между стъпките} more steps to reach goal."
