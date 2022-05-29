function requiredRading(pages, pagesInHour, days){
let timeToReadBook = pages / pagesInHour;
let hoursPreDay = timeToReadBook / days
console.log(hoursPreDay);
}
requiredRading(432, 15, 4)