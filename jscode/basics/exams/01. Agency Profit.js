function agencyProfit(input){
    let company = input[0];
    let ticketAdult = Number(input[1]);
let ticketChild = Number(input[2]);
let adultTicketPrice = Number(input[3]);
let fee = Number(input[4]);
let profit = 0
let ticketChildPrice = 0
ticketChildPrice = adultTicketPrice - (0.7 * adultTicketPrice)
 adultTicketPrice = adultTicketPrice + fee
 ticketChildPrice +=  fee
 let total = (adultTicketPrice * ticketAdult) + (ticketChild * ticketChildPrice)
profit = 0.2 * total
 console.log(`The profit of your agency from ${company} tickets is ${profit.toFixed(2)} lv.`);
}agencyProfit(["WizzAir",
    15,
    5,
    120,
    40
    ])
// Нетна цената на детски билет: 120 - 70% = 36лв
// Цена на билет за възрастен с такса обслужване:
// 120 +  40 = 160 лв.
// Цена на детски билет с такса обслужване: 36  +  40 = 76 лв.
// Общата цена на всички билети: (5 * 76) + (15 * 160)  = 2780 лв.
// Печалба: 20% от 2790 = 556 лв
