function bonusScoringSystem(array) {
let students = Number(array.shift());
let lectures = Number(array.shift());
let additional = Number(array.shift());
let maxBonus = 0;
let attendances = 0;
let mAttendances = 0;
for (let i = 0; i < students; i++) {
   attendances = Number(array.shift());
let bonus = attendances / lectures * (5 + additional)
if (bonus > maxBonus) {
 maxBonus = bonus;
 mAttendances = attendances;
}
}
console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`); 
console.log(`The student has attended ${mAttendances} lectures.`);    
}
bonusScoringSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]);
//First, we receive the number of students enrolled in the course – 5. 
// The total count of the lectures is 25, and the additional bonus is 30.
//  Then we calculate the bonus of the student with 12 attendances, 
//  \which is 16.8. We continue calculating each of the student's bonuses. The one with 24 attendances 
// has the highest bonus – 33.6 (34 rounded), so we print the appropriate message on the console.

// The bonus is calculated with the following formula:
// {total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
// Find the student with the maximum bonus and print them, along with his attendances, in the following format:
// "Max Bonus: {max bonus points}."
// "The student has attended {student attendances} lectures."
// Round the bonus points at the end to the nearest larger number.
