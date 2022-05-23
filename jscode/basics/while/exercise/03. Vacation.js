function vacation(input) {
    let index = 0;
let tripMoney = Number(input[index]);
index++;
let money = Number(input[index]);
index++; 
let daysSpendCount = 0
let dayCount = 0;
while (money < tripMoney) {
    dayCount++
    let action = input[index]
    index++
    let amount = Number(input[index])
    index++
    switch (action) {
        case'spend':
        daysSpendCount++
        money -= amount
         if(money < 0){
            money = 0;
        }
        break;
        case'save':
          money += amount;
          daysSpendCount = 0;
          break;
    }
     if (daysSpendCount >= 5) {
        console.log(`You can't save the money.`);
        console.log(`${dayCount}`);
        break;
        }
        
    }
   
    if (money >= tripMoney) {
         console.log(`You saved the money for ${dayCount} days.`);
    }
   
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])






// •	Пари нужни за екскурзията - реално число в интервала [1.00.. .25000.00]
// •	Налични пари - реално число в интервала [0.00... 25000.00]
// След това многократно се четат по два реда:
// •	Вид действие – текст с възможности "spend" и "save".
// •	Сумата, която ще спести/похарчи - реално число в интервала [0.01… 25000.00]

// •	Ако 5 последователни дни Джеси само харчи, на конзолата да се изпише:
// o	"You can't save the money."
// o	"{Общ брой изминали дни}"
// •	Ако Джеси събере парите за почивката на конзолата се изписва:
// o	"You saved the money for {общ брой изминали дни} days."
