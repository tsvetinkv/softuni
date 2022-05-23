function excursion(input){
let peopleInGroup = Number(input[0]);
let nights = Number(input[1]);
let transportCards = Number(input[2]);
let museumTickets = Number(input[3]);
let sumForNights1person = nights * 20;
// Карти за транспорт: 30 * 1.60 =  48 лв.
let sumForTransport1person = transportCards * 1.60;
// Билети за музеи: 6 * 6 = 36 лв.
let sumMuseum1person = museumTickets * 6;
// Обща сума за един човек от групата: 280 + 48 + 36 =  364 лв.
let sum1person = sumForNights1person + sumForTransport1person + sumMuseum1person
// Сума за цялата група: 364 * 20 = 7280 лв.
let sumGroup = sum1person * peopleInGroup
// Сума след добавяне на непредвидените разходи: 7280 + 25% = 9100 лв.
let total = sumGroup + (sumGroup * 0.25)
console.log(total.toFixed(2));
} excursion(["131",
"9",
"33",
"46"])
