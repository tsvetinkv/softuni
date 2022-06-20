function bombNumbers(sequence, bombAndPower) {
    let bomb = bombAndPower.shift();
    let power = bombAndPower.shift();
    for (let i = 0; i < sequence.length; i++) {
        if(sequence[i] == bomb) {
deleteNext(sequence, i, power);
        }
   
    }
  
    function deleteNext(arr, index, power) {
let start = Math.max(0,index - power);
let end= Math.min(arr.length - 1, index + power);
for (let i = start; i <= end; i++) {
    arr[i] = 0;
}
    }
    let sum= 0;
    for (const el of sequence) {
        sum += el
    }
    console.log(sum);
}

  bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
  bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
  bombNumbers([1, 1, 2, 1, 1, 1,2, 1, 1, 1],[2, 1])
