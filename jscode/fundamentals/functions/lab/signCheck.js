function signFromMultyplyingThreeNumbers(num1, num2, num3) {
    let sign;
    if (num1 > 0 && num2 > 0 && num3 > 0) {
        sign = "Positive"
    }else if (num1 < 0 && num2 > 0 && num3 > 0) {
        sign = "Negative"
    }else if (num1 > 0 && num2 < 0 && num3 > 0) {
        sign = "Negative"
    }else if (num1 > 0 && num2 > 0 && num3 < 0){
        sign = "Negative"
    }else if (num1 < 0 && num2 < 0 && num3 > 0) {
        sign = "Positive"
    }else if (num1 < 0 && num2 > 0 && num3 < 0){
        sign = "Positive"
    }else if (num1 > 0 && num2 < 0 && num3 < 0){
        sign = "Positive"
    }else if (num1 < 0 && num2 < 0 && num3 < 0){
        sign = "Negative"
    }
    console.log(sign);
}signFromMultyplyingThreeNumbers(-5, 1, 1)