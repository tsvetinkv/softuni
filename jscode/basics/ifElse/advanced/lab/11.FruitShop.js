function fruitShop(input) {
    const fruit = input[0]
    const day = input[1]
    const quantity = input[2]

if(fruit === "banana"){
    switch(day){
        case "Monday": console.log((2.50 * quantity).toFixed(2)); break;
        case "Tuesday":  console.log((2.50 * quantity).toFixed(2)); break;
        case "Wednesday": console.log((2.50 * quantity).toFixed(2)); break;
            case "Thursday": console.log((2.50 * quantity).toFixed(2)); break;
                case "Friday":  console.log((2.50 * quantity).toFixed(2)); break;
                case "Saturday": console.log((2.70 * quantity).toFixed(2)); break;
                    case "Sunday":  console.log((2.70 * quantity).toFixed(2)); break;
                    default: console.log("error")
    }
}else if(fruit === "apple"){
switch(day){
    case "Monday": console.log((1.20 * quantity).toFixed(2)); break;
    case "Tuesday":  console.log((1.20 * quantity).toFixed(2)); break;
    case "Wednesday": console.log((1.20 * quantity).toFixed(2)); break;
        case "Thursday": console.log((1.20 * quantity).toFixed(2)); break;
            case "Friday":  console.log((1.20 * quantity).toFixed(2)); break;
            case "Saturday": console.log((1.25 * quantity).toFixed(2)); break;
                case "Sunday":  console.log((1.25 * quantity).toFixed(2)); break;
                default: console.log("error")
}
}else if(fruit === "orange"){
    switch(day){
        case "Monday": console.log((0.85 * quantity).toFixed(2)); break;
        case "Tuesday":  console.log((0.85 * quantity).toFixed(2)); break;
        case "Wednesday": console.log((0.85 * quantity).toFixed(2)); break;
            case "Thursday": console.log((0.85 * quantity).toFixed(2)); break;
                case "Friday":  console.log((0.85 * quantity).toFixed(2)); break;
                case "Saturday": console.log((0.90 * quantity).toFixed(2)); break;
                    case "Sunday":  console.log((0.90 * quantity).toFixed(2)); break;
                    default: console.log("error")
    }
}else if(fruit === "grapefruit"){
    switch(day){
        case "Monday": console.log((1.45 * quantity).toFixed(2)); break;
        case "Tuesday":  console.log((1.45 * quantity).toFixed(2)); break;
        case "Wednesday": console.log((1.45 * quantity).toFixed(2)); break;
            case "Thursday": console.log((1.45 * quantity).toFixed(2)); break;
                case "Friday":  console.log((1.45 * quantity).toFixed(2)); break;
                case "Saturday": console.log((1.60 * quantity).toFixed(2)); break;
                    case "Sunday":  console.log((1.60 * quantity).toFixed(2)); break;
                    default: console.log("error")
    }
}else if(fruit === "kiwi"){
    switch(day){
        case "Monday": console.log((2.70 * quantity).toFixed(2)); break;
        case "Tuesday":  console.log((2.70 * quantity).toFixed(2)); break;
        case "Wednesday": console.log((2.70 * quantity).toFixed(2)); break;
            case "Thursday": console.log((2.70 * quantity).toFixed(2)); break;;
                case "Friday":  console.log((2.70 * quantity).toFixed(2)); break;
                case "Saturday": console.log((3.00 * quantity).toFixed(2)); break;
                    case "Sunday":  console.log((3.00 * quantity).toFixed(2)); break;
                    default: console.log("error")
    }
}else if(fruit === "pineapple"){
    switch(day){
        case "Monday": console.log((5.50 * quantity).toFixed(2)); break;
        case "Tuesday":  console.log((5.50 * quantity).toFixed(2)); break;
        case "Wednesday": console.log((5.50 * quantity).toFixed(2)); break;
            case "Thursday": console.log((5.50 * quantity).toFixed(2)); break;
                case "Friday":  console.log((5.50 * quantity).toFixed(2)); break;
                case "Saturday": console.log((5.60 * quantity).toFixed(2)); break;
                    case "Sunday":  console.log((5.60 * quantity).toFixed(2)); break;
                    default: console.log("error")
    }
}else if(fruit === "grapes"){
    switch(day){
        case "Monday": console.log((3.85 * quantity).toFixed(2)); break;
        case "Tuesday":  console.log((3.85 * quantity).toFixed(2)); break;
        case "Wednesday": console.log((3.85 * quantity).toFixed(2)); break;
            case "Thursday": console.log((3.85 * quantity).toFixed(2)); break;
                case "Friday":  console.log((3.85 * quantity).toFixed(2)); break;
                case "Saturday": console.log((4.20 * quantity).toFixed(2)); break;
                    case "Sunday":  console.log((4.20 * quantity).toFixed(2)); break;
                    default: console.log("error")
    }
} else{
    console.log("error")
}
}
fruitShop(["apple",
"Tuesday",
"2"])
