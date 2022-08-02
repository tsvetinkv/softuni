function theImitationGame(input){
let word = input.shift();
let line = input.shift();
while(line != 'Decode'){
    let [command, dataOne,dataTwo] = line.split('|');
    switch(command){
        case 'ChangeAll':
   let str = dataOne
   let replacement = dataTwo;
   while(word.includes(str)){
    word = word.replace(str, replacement);
    }
        break;

        case 'Insert':
        let index = dataOne;
        let value = dataTwo;
        let firstPart = word.slice(0, index);
        let secondPart = word.slice(Number(index));
        word = firstPart + value + secondPart;
       
        break;

        case 'Move':
        let n = dataOne;
        let lettersToMove = word.slice(0, n);
         let wordLeft = word.slice(n);
         word = wordLeft + lettersToMove;

        break;
    }
    line = input.shift();
}
console.log(`The decrypted message is: ${word}`);
}
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]);
  //time: 15 minutes