function bombNumbers(sequence, bombAndPower) {
  let bomb = bombAndPower.shift();
  let power = bombAndPower.shift();
  let index = sequence.indexOf(bomb);

  if (countInArray(sequence, bomb) > 1){
    let index2 = sequence.indexOf(bomb);  

  let sum = 0;
  let res = sequence.slice(index + 2, index2 - power)
  for (const el of res) {
    sum += el
  }
  let result = sequence.slice(index2 + power + 1, sequence.length)
  for (const el of result) {
  sum += el
  }

  }
 

  let sum = 0;
   let res = sequence.slice(0, index - power)
for (const el of res) {
  sum += el
}
let result = sequence.slice(index + power + 1, sequence.length)
for (const el of result) {
sum += el
}
console.log(sum);


function countInArray(array, el) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
      if (array[i] === el) {
          count++;
      }
  }
  return count;
}
}
//bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
//bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
bombNumbers([1, 1, 2, 1, 1, 1,2, 1, 1, 1],[2, 1])
