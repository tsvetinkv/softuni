function workingHours(input){
    const hour = Number(input[0]);
    const day = input[1];
    if(day === "Sunday"){
        console.log("closed");
    }else if(day === "Monday"){
        switch(hour) {
            case 10:
                case 11:
               case 12:
               case 13:
               case 14:
               case 15:
               case 16:
               case 17:
               case 18: console.log("open");break;
              default: console.log("closed");
        }
            }else if(day === "Tuesday"){
            switch(hour) {
                case 10:
                 case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18: console.log("open");break;
               default: console.log("closed")
            }
    }else if(day === "Wednesday" ){
        switch(hour) {
            case 10:
             case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18: console.log("open");break;
           default: console.log("closed")
        }
    }else if(day === "Thursday"){
        switch(hour) {
            case 10:
             case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18: console.log("open");break;
           default: console.log("closed")
        }
    } else if(day === "Friday"){
        switch(hour) {
            case 10:
             case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18: console.log("open");break;
           default: console.log("closed")
        }
    }else {
        switch(hour) {
            case 10:
             case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18: console.log("open");break;
           default: console.log("closed")
        } 
    }
} workingHours(["",
"Monday"])
