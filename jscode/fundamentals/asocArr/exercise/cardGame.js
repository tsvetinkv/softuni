function cardGame(input){
let players = new Map();
let powerToNum = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A" : 14
}
let typeToNum = {
    'S': 4, 
    'H': 3, 
    'D': 2, 
    'C': 1
}

for(let line of input) {
    let token = line.split(": ")
    let name= token[0];
    let deck = token[1].split(", ");
    if (!players.has(name)) {
      players.set(name, new Set());
    }
    for(let card of deck) {
        players.get(name).add(card);
    }
}
for(let [key, value] of players) {
    let sum = 0;
    for(let card of value) {
        let split = card.split("");
       let type = split.pop();
       let power = split.join("");
       let cardPowerAsNum = powerToNum[power];
       let typeAsNum = typeToNum[type];
      sum += cardPowerAsNum * typeAsNum;
    }
    console.table(`${key}: ${sum}`);
}

}
cardGame([

    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ])