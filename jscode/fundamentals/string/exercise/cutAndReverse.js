function cutAndReverse(str){
let firstHalf = str.slice(0, (str.length / 2));
let arrOfFirstHalf = [];
for (const el of firstHalf) {
   arrOfFirstHalf.push(el); 
}
arrOfFirstHalf = arrOfFirstHalf.reverse();

 let secondtHalf = str.slice((str.length / 2));
 let arrOfSecondtHalf = [];
for (const el of secondtHalf) {
    arrOfSecondtHalf.push(el); 
 }
let reverseSecondtHalf = arrOfSecondtHalf.reverse();
console.log(arrOfFirstHalf.join(''));
console.log(reverseSecondtHalf.join(''));
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
//ThisIsDifficult 
//ThisIsSoAmazing