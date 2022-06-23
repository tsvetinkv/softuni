function numbers(nums){
    let n = nums.split(" ");
let sum = 0;
for (let el of n) {
   sum += Number(el); 
}
let avg = sum / n.length;
let greater = n.filter(x => x > avg)
let sort = greater.sort((x, y) => y - x)
let result = sort.slice(-5)
console.log(result);
}numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')