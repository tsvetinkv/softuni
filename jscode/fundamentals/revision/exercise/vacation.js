function vacation(group, typeGroup, day) {
    let price = 0;

    if (typeGroup === "Students") {
        switch (day) {
            case "Friday":
                price = group * 8.45;
                break;
            case "Saturday":
                price = group * 9.8;
                break;
            case "Sunday":
                price = group * 10.46;
                break;
        }
        if (group >= 30) {
            price = price - 0.15 * price;
        }
    } else if (typeGroup === "Business") {
        if (group >= 100) {
            switch (day) {
                case "Friday":
                    price = (group - 10) * 10.9;
                    break;
                case "Saturday":
                    price = (group - 10) * 15.6;
                    break;
                case "Sunday":
                    price = (group - 10) * 16;
                    break;
            }
        } else {
            switch (day) {
                case "Friday":
                    price = group * 10.9;
                    break;
                case "Saturday":
                    price = group * 15.6;
                    break;
                case "Sunday":
                    price = group * 16;
                    break;
            }
        }
    } else if (typeGroup === "Regular") {
        switch (day) {
            case "Friday":
                price = group * 15;
                break;
            case "Saturday":
                price = group * 20;
                break;
            case "Sunday":
                price = group * 22.5;
                break;
        }
        if (group >= 10 && group <= 20) {
            price = price - 0.05 * price;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(
    30,

    "Business",

    "Friday"
);