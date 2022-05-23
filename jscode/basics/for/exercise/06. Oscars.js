function oscars(input) {
    let index = 0
let actorName = input[index];
index++;
let points = Number(input[index]);
index++;
let jury = Number(input[index]);
index++;
isOscar = false;
for (let i = 0; i < jury; i++) {
    
    let juryName = input[index];
    index++;
    let juryPoints = Number(input[index]);
    index++;
    points += (juryName.length * juryPoints) / 2
if (points > 1250.5){
    console.log(`Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`);
isOscar = true; break;
}
}
if (!isOscar){
    let needPoints = 1250.5 - points
    console.log(`Sorry, ${actorName} you need ${needPoints.toFixed(1)} more!`);
   
}

}oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
