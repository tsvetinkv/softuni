function nonDecreasingSubset(arr){
let biggestNums = [];
for (let i = 0; i < arr.length; i++) {
    let lastBiggest = Number(biggestNums[biggestNums.length - 1]);
    if (i == 0) {
        biggestNums.push(arr[i]);
    }else if (arr[i] >= lastBiggest) {
        biggestNums.push(arr[i]);
    }
}
console.log(biggestNums.join(' '));
}
nonDecreasingSubset([ 100, 3, 8, 4, 10, 12, 3, 2, 24]);