function hotelRoom(input){
    const month = input[0]
    const  nightsStayed = Number(input[1])
  let  totalMoneyForSudio = 0
  let totalMoneyForApartment = 0
    switch(month) {
        case "May":
            case "October": 
            totalMoneyForSudio = nightsStayed * 50
            totalMoneyForApartment = nightsStayed * 65
            if(nightsStayed > 7 && nightsStayed < 14) {
                totalMoneyForSudio -= totalMoneyForSudio * 0.05
            }else if( nightsStayed > 14){
                totalMoneyForSudio -= totalMoneyForSudio * 0.3
            }
            break;
            case "June":
                case "September":  totalMoneyForSudio = nightsStayed * 75.20
                totalMoneyForApartment = nightsStayed * 68.70
                if(nightsStayed > 14){
                    totalMoneyForSudio -= totalMoneyForSudio * 0.2
                }
                break;
                case "July":  
                case "August":  totalMoneyForSudio = nightsStayed * 76
                totalMoneyForApartment = nightsStayed * 77
    }
if(nightsStayed > 14){
    totalMoneyForApartment -= totalMoneyForApartment * 0.1
}   
console.log(`Apartment: ${totalMoneyForApartment.toFixed(2)} lv.`);
console.log(`Studio: ${totalMoneyForSudio.toFixed(2)} lv.`);
}
hotelRoom(["May",
"15"])
// Apartment: 877.50 lv.
// Studio: 525.00 lv.
hotelRoom(["August",
"20"])


