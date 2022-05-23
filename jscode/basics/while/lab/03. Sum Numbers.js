function sum(input){
    let index = 0;
    let num = Number(input[index]);
    index++;
    let sum = 0;

while(sum < num){
   let currentNum = Number(input[index]);
    sum += currentNum
    index++;
    
}
console.log(sum);

}sum(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
