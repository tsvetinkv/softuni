function courier(input){

let massINKg = Number(input[0]);

let typeDelivery = input[1];

let distanceInKm = Number(input[2]);
let priceForKm = 0;
let totalPrice = 0;

if(massINKg < 1){
    switch(typeDelivery){
case 'standard': priceForKm += 0.03
totalPrice = distanceInKm * priceForKm;
break;
case 'express': priceForKm += 0.8 * 0.03
let price = priceForKm * massINKg
let total = distanceInKm * price;
 totalPrice = total + (distanceInKm * 0.03)
break;
    }
    console.log(`The delivery of your shipment with weight of ${massINKg.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`);
}else if(massINKg >= 1 && massINKg < 10){
    switch(typeDelivery){
        case 'standard': priceForKm += 0.05
        totalPrice = distanceInKm * priceForKm;
        break;
        case 'express': priceForKm += 0.40 * 0.05
        let price = priceForKm * massINKg
        let total = distanceInKm * price;
         totalPrice = total + (distanceInKm * 0.05)
        break;
            }
            console.log(`The delivery of your shipment with weight of ${massINKg.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`);
}else if(massINKg >= 10 && massINKg < 40){
    switch(typeDelivery){
        case 'standard': priceForKm += 0.10
        totalPrice = distanceInKm * priceForKm;
        break;
        case 'express': priceForKm += 0.05 * 0.10
        let price = priceForKm * massINKg
        let total = distanceInKm * price;
         totalPrice = total + (distanceInKm * 0.10)
        break;
            }
            console.log(`The delivery of your shipment with weight of ${massINKg.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`);
}else if(massINKg >= 40 && massINKg < 90){
    switch(typeDelivery){
        case 'standard': priceForKm += 0.15
        totalPrice = distanceInKm * priceForKm;
        break;
        case 'express': priceForKm += 0.02 * 0.15
        let price = priceForKm * massINKg
       let total = distanceInKm * price;
        totalPrice = total + (distanceInKm * 0.15)
        break;
            }
            console.log(`The delivery of your shipment with weight of ${massINKg.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`);
}else {
    switch(typeDelivery){
        case 'standard': priceForKm += 0.20
        totalPrice = distanceInKm * priceForKm;
        break;
        case 'express': priceForKm += 0.01 * 0.20
        let price = priceForKm * massINKg
        let total = distanceInKm * price;
         totalPrice = total + (distanceInKm * 0.20)
        break;
            }
            console.log(`The delivery of your shipment with weight of ${massINKg.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`);
}


} courier(["20", 
"standard",
"349"])

