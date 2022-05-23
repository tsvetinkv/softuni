function graduation(input){
    let index = 0;
    let name = input[index];
    index++;
    let excludedCount = 0;
    let gradesSum = 0;
    let isGrade = true;
   let i = 1;
    while(i <= 12){
        let grades = Number(input[index]);
        index++
        if(grades < 4){
            excludedCount++;
            if( excludedCount > 1){
                  console.log(`${name} has been excluded at ${i} grade`);
                  isGrade = false;
                break;
            }
          
      continue;
        }
        i++
         gradesSum += grades
        }
        if (isGrade) {
            let avg = gradesSum / 12
      console.log(`${name} graduated. Average grade: ${avg.toFixed(2)} `);
        }

    }
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])


// Напишете програма, която изчислява средната оценка на ученик от цялото му обучение.
//  На първия ред ще получите името на ученика, а на всеки следващ ред неговите годишни
//   оценки. Ученикът преминава в следващия клас, ако годишната му оценка е по-голяма или 
//   равна на 4.00. Ако ученикът бъде скъсан повече от един път, то той бива изключен и 
//   програмата приключва, като се отпечатва името на ученика и в кой клас бива изключен.
//  При успешно завършване на 12-ти клас да се отпечата : 
// "{име на ученика} graduated. Average grade: {средната оценка от цялото обучение}"
// В случай, че ученикът е изключен от училище, да се отпечата:
// "{име на ученика} has been excluded at {класа, в който е бил изключен} grade"
// Стойността трябва да бъде форматирана до втория знак след десетичната запетая. 
