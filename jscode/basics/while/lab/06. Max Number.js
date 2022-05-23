function maxNumber(input){
let index = 0;
let inputElement = input[index];
index++;
let maxNumber = Number.MIN_SAFE_INTEGER;
while(inputElement !== "Stop"){
let num = Number(inputElement);
if(num > maxNumber){
    maxNumber = num;
}
inputElement = input[index];
index++;
}
console.log(maxNumber);
}maxNumber(["100",
"99",
"80",
"70",
"Stop"])
