function studentinfo(name,age,grade){

//     You will be given 3 parameters – student name (string), age (number),
//      and average grade (number). Your task is to print all the info about the student in the following format:

// `Name: {student name}, Age: {student age}, Grade: {student grade}`
console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
// Note: The grade should be formatted to the second decimal point.
 } studentinfo('John', 15, 5.54678)