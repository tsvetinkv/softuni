function examPreparation(input){
   let badGrades = Number(input[0]);
   index = 1;
      let command = input[index];
   let badGradesCount = 0;
   let  sumGrades = 0;
   let lastExercise = '';
   let exCounter = 0;

   while (command !== "Enough") {
       lastExercise = command = input[index];
         exCounter++;     
   index++;
   let grade = Number(input[index]);
   sumGrades += grade;
   
   if(grade <= 4){
    badGradesCount++;
   }
   if (badGradesCount >= badGrades) {
   console.log(`You need a break, ${badGradesCount} poor grades.`);
   break;
}
index++;
command = input[index];
   }
   
   if (command === 'Enough') {
      let avgGrade = sumGrades / exCounter;
      console.log(`Average score: ${avgGrade.toFixed(2)}`);
      console.log(`Number of problems: ${exCounter}`);
      console.log(`Last problem: ${lastExercise}`);
   }
   }
   examPreparation
   (["3",
   "Money",
   "6",
   "Story",
   "4",
   "Spring Time",
   "5",
   "Bus",
   "6",
   "Enough"])
   

   // •	Ако Марин стигне до командата "Enough", отпечатайте на 3 реда: 
   // o	"Average score: {средна оценка}"
   // o	"Number of problems: {броя на всички задачи}"
   // o	"Last problem: {името на последната задача}"
   // •	Ако получи определеният брой незадоволителни оценки:
   // o	"You need a break, {брой незадоволителни оценки} poor grades."
   // Средната оценка да бъде форматирана до втория знак след десетичната запетая. 
   