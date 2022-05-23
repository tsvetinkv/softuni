function hairSalon(input){
    let index = 0;
    let goal = Number(input[index]);
    index++;
    let command = input[index];

    let price = 0;
    while (command !== "closed"){
        let typeservice = command;
      index++;
        if (typeservice === "haircut"){
            
            let typeHaircut = input[index]
            
            switch(typeHaircut){
                	case "mens":
                        price += 15;
                        break;
                        case "ladies":
                            price += 20;
                            break;
                            case "kids": 
                                price += 10;
                                break;
            }
        }else if (typeservice === "color"){
            let typeColor = input[index];
          
            switch(typeColor){
                case "touch up":
                    price += 20;
                    break;
                    case "full color":
                        price += 30;
                        break;
                       }
                  }
                 index++;
                  command = input[index];
                 if (price >= goal) {
                     break;
                 }
    }
    if (price >= goal) {
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${price}lv.`);
        }else{
            let diff = goal - price;
            console.log(`Target not reached! You need ${diff}lv. more.`);
            console.log(`Earned money: ${price}lv.`);
        }
} hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])

