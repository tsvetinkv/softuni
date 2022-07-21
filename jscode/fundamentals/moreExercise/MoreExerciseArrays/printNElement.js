function printNElement(arr){
let n = Number(arr.pop());
let buff = ``;
for(let i = 0; i < arr.length; i += n){
    buff += `${arr[i]} `
}
console.log(buff);
}
printNElement(['5', '20', '31', '4', '20', '2']);
