function numberModification(num){
let numToString = num.toString();
let avg = 0;
let sum = 0;
for (const num of numToString) {
   sum += Number(num); 
}
 avg = sum / numToString.length;
 while (avg < 5){
    numToString = numToString.padEnd(numToString.length + 1, '9');
    sum += 9;
    avg = sum / numToString.length;
 }
 console.log(numToString);
}
numberModification(5835);