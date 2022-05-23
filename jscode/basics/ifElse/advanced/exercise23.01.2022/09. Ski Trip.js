function skiTrip(input){

let days = Number(input[0])
let room = input[1]
let rate = input[2]
let nights = days - 1
let onePersonRoomPrice = 18.00 //per night
let apartmentPrice = 25.00 //per night
let presidentApartPrice = 35.00 //per night 
let price = 0
if(days < 10){
switch(room){
case 'room for one person': price = nights * onePersonRoomPrice; break;
case 'apartment': price = nights * apartmentPrice
price -= 0.3 * price; break;
case 'president apartment': price = nights * presidentApartPrice
price -= 0.1 * price; break;
} 
}else if(days >= 10 && days <=15){
    switch(room){
        case "room for one person" : price = nights * onePersonRoomPrice; break;
        case 'apartment': price = nights * apartmentPrice
        price -= 0.35 * price; break;
        case 'president apartment': price = nights * presidentApartPrice
        price -= 0.15 * price; break;
    }
}else{
    switch(room){
        case 'room for one person': price = nights * onePersonRoomPrice; break;
        case 'apartment': price = nights * apartmentPrice
        price -= 0.5 * price; break;
        case 'president apartment': price = nights * presidentApartPrice
        price -= 0.2 * price; break;
    }
}
if(rate === "positive"){
    price += 0.25 * price
}else{
    price -= 0.1 * price
}
console.log(price.toFixed(2));
}skiTrip(["14",
"apartment",
"positive"])

// вид помещение	        по-малко от 10 дни    	между 10 и 15 дни	     повече от 15 дни
// room for one person   	не ползва намаление	    не ползва намаление	     не ползва намаление
// apartment            	30% от крайната цена	35% от крайната цена	 50% от крайната цена
// president apartment    	10% от крайната цена	15% от крайната цена	 20% от крайната цена
// "room for one person" – 18.00 лв за нощувка
// "apartment" – 25.00 лв за нощувка 
// "president apartment" – 35.00 лв за нощувка
// След престоя, оценката на Атанас за услугите на хотела може да е позитивна (positive)
//  или негативна (negative) . Ако оценката му е позитивна, 
// към цената с вече приспаднатото намаление Атанас добавя 25% от нея.
//  Ако оценката му е негативна приспада от цената 10%.
