function travelling(input){
    let index = 0;
    let destination = input[index];
    index++;
    let neededBudget = Number(input[index]);
    index++;
 
   let savings = 0;
   while(destination !== "End"){
         while(savings < neededBudget){
          let money = Number(input[index]);     
            savings += money;
            index++
         }
          console.log(`Going to ${destination}!`);
           destination = input[index];
           index++;
           neededBudget = Number(input[index]);
           savings = 0;
           index++;
    }
}travelling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])

