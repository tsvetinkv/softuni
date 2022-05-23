function cinemaTikets(input){
let index = 0;
let inputLine = input[index];
let standartTicketsCount = 0;
let kidTicketsCount = 0;
let studentTicketsCount = 0;
while (inputLine!== 'Finish') {
    let movieName = inputLine
    index++;
    let allTickets = Number(input[index]);
    let freeSpace = allTickets
    index++;
      let typeTicket = input[index];
    while (typeTicket !== 'End') {
      switch (typeTicket) {
          case 'standard':
              standartTicketsCount++;
              break;
         case 'kid':
         kidTicketsCount++;
          break;
         case 'student':
        studentTicketsCount++;
         break;  
      }
       freeSpace--;
       if(freeSpace === 0){
           break;
       }
      index++
     typeTicket = input[index]  
        
    }
    let boughtTickets = allTickets - freeSpace;
    let protangeFull = boughtTickets / allTickets * 100;
    console.log(`${movieName} - ${(protangeFull).toFixed(2)}% full.`);
    index++;
    inputLine = input[index];
}
let allBoughtTickets = kidTicketsCount + studentTicketsCount + standartTicketsCount
console.log(`Total tickets: ${allBoughtTickets}`);

let studentProtange = studentTicketsCount / allBoughtTickets * 100
console.log(`${(studentProtange).toFixed(2)}% student tickets.`);

let standardProtange = standartTicketsCount / allBoughtTickets * 100
console.log(`${(standardProtange).toFixed(2)}% standard tickets.`);

let kidProtange = kidTicketsCount / allBoughtTickets * 100
console.log(`${(kidProtange).toFixed(2)}% kids tickets.`);
}
cinemaTikets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])

// Входът е поредица от цели числа и текст:
// •	На първия ред до получаване на командата "Finish" - име на филма – текст
// •	На втори ред – свободните места в салона за всяка прожекция – цяло число [1 … 100]
// •	За всеки филм, се чете по един ред до изчерпване на свободните места в залата или до получаване на командата "End":
// o	Типа на закупения билет - текст ("student", "standard", "kid"
