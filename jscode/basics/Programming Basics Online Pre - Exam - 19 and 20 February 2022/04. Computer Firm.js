function computerFirm(input){
    index = 0;
    let n = Number(input[index])
    index++;
    let realsales = 0;
    let salesCount = 0;
    let avg = 0;
    for (let i = 1; i <= n; i++){
let num = input[index];
index++;
let possibleSales = Number(num.charAt(0) + num.charAt(1));
let rating = Number(num.charAt(2));

if(rating === 2){
  realsales = 0 * possibleSales 

}else if(rating === 3){
realsales = 0.5 * possibleSales

}else if(rating === 4){
    realsales = 0.7 * possibleSales;

}else if(rating === 5){
    realsales = 0.85 * possibleSales;

}else {
    realsales = 1 * possibleSales;

}
salesCount += realsales;
avg += rating / n;

    }
console.log(salesCount.toFixed(2));
console.log(avg.toFixed(2));
}computerFirm(["2",
"204",
"206"])


