function tenisRamklist(input){
    let index = 0

let tournirs = Number(input[index])
index++
let tournirPoints = 0
let startPoints = Number(input[index])
let winCount = 0
for(let i = 0; i <= tournirs; i++){
    let ethap = input[index]
    index++
    switch(ethap){
        case 'W': tournirPoints += 2000;
        winCount++
        break;
        case 'F': tournirPoints += 1200; break;
        case 'SF': tournirPoints += 720; break;
    }
    
}
console.log(`Final points: ${startPoints + tournirPoints }`);
console.log(`Average points: ${Math.floor(tournirPoints / tournirs)}`);
console.log(`${(winCount / tournirs * 100).toFixed(2)}%`);


}tenisRamklist([7,
    1200,
   " SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"])
