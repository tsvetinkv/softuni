function trekkingMania(input){
    let index = 0
let groupsCount = Number(input[index]);
index++;
let musala = 0
let monbaln = 0
let klim = 0
let k2 = 0
let everest = 0
let totalPeople = 0
for(let i = 0; i < groupsCount; i++){
    let peopleInGroup = Number(input[index])
    index++;
   
if(peopleInGroup <= 5){
musala += peopleInGroup
}else if(peopleInGroup >= 6 && peopleInGroup <= 12){
    monbaln += peopleInGroup
}else if(peopleInGroup >= 13 && peopleInGroup <= 25){
   klim += peopleInGroup
}else if(peopleInGroup >= 26 && peopleInGroup <= 40){
    k2 += peopleInGroup
}else{
everest += peopleInGroup
}
totalPeople = monbaln + klim + k2 + everest + musala
}
console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
console.log(`${(monbaln / totalPeople * 100).toFixed(2)}%`);
console.log(`${(klim / totalPeople * 100).toFixed(2)}%`);
console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);
}trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
