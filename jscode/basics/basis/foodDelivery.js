function foodDelivery (input) {
 //   •	Пилешко меню –  10.35 лв. 
 const chiken = 10.35
//•	Меню с риба – 12.40 лв. 
const fish = 12.40
//•	Вегетарианско меню  – 8.15 лв. 
const vegan = 8.15
//Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката). 
//Цената на доставка е 2.50 лв и се начислява най-накрая.  
const delivery = 2.50
  //  •	Брой пилешки менюта – цяло число в интервала [0 … 99]
const chikenMenu = Number(input[0])
   // •	Брой менюта с риба – цяло число в интервала [0 … 99]
   const fishMenu = Number(input[1])
    //•	Брой вегетариански менюта – цяло число в интервала [0 … 99]
    const veganMenu = Number(input[2])
  //  Цена за пилешките менюта: 2 броя * 10.35  = 20.70
  const priceChiken = chikenMenu * chiken
//Цена за менютата с риба: 4 броя * 12.40 = 49.60
const priceFish = fishMenu * fish
//Цена за вегетарианските менюта: 3 броя * 8.15 = 24.45
const priceVegan = veganMenu * vegan
//Обща цена на менютата: 20.70 + 49.60 + 24.45 = 94.75
const sum = priceChiken + priceFish + priceVegan
//Цена на десерта: 20% от 94.75 = 18.95
const desert = 0.2 * sum
//Обща цена на поръчката: 94.75 + 18.95 + 2.50 = 116.20
const total = sum + desert + delivery
console.log(total)
}
foodDelivery(["2 ","4 ","3 "])