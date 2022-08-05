function destinationMapper(input){
let pattern = /(=|\/)(?<destination>[A-Z][A-Za-z]{2,})\1/gm
let valid;
let locations = '';
let travelPoints = 0;
let destinations = [];
while ((valid = pattern.exec(input))!== null) {
    locations += valid.groups['destination'];
    travelPoints = locations.length;
    destinations.push(valid.groups['destination']);
}

console.log('Destinations: '+ destinations.join(', '));
console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
//Destinations: Hawai, Cyprus
//Travel Points: 11
