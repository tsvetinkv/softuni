function trainTheTrainers(input){
    let index = 0;
    let jury = Number(input[index]);
    index++;
   let avg = 0;
   countGrades = 0;
    while (input[index] !== 'Finish') {
         let sumGrades = 0;
        let presentationName = input[index];
        index++;
        let grade = Number(input[index]);
        for (let i = 1; i <= jury; i++) {
             avg += grade
               countGrades++;
            sumGrades += grade
            if(i < jury){
            index++;
            grade = Number(input[index]);           
            }
        }
        
         console.log(`${presentationName} - ${(sumGrades / jury).toFixed(2)}.`);
         index++;
        
    }
    if (input[index] === 'Finish') {
       avg = avg / countGrades
        console.log(`Student's final assessment is ${avg.toFixed(2)}.`);
    }
}trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])
