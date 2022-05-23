function operationBetweenNumbers(input){
const n1 = Number(input[0])
const n2 = Number(input[1])
const operator = input[2]
let evenOROdd
let result = 0
if(operator ==="+"||operator ==="-"||operator ==="*"){
     
if(operator === "+"){
    result = n1 + n2
   if(result % 2 == 0){
        evenOROdd = "even"
    }else{
        evenOROdd = "odd"
    }
}else if(operator === "-"){
    result = n1 - n2
    if(result % 2 == 0){
        evenOROdd = "even"
    }else{
        evenOROdd = "odd"
    }
}else if(operator === "*"){
    result = n1 * n2
    if(result % 2 == 0){
        evenOROdd = "even"
    }else{
        evenOROdd = "odd"
    }
}
console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOROdd}`);

}else if(operator === "/"){ 
    if (n2 === 0 && operator === '/') {
        console.log(`Cannot divide ${n1} by zero`);
    } else {
        result = n1 / n2;
        console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
    }
    
}else if(operator === "%"){ 
    if(n2 === 0){
        console.log(`Cannot divide ${n1} by zero`);
    }else{
         result = n1 % n2
    console.log(`${n1} % ${n2} = ${result}`);
    }  
}

    
}operationBetweenNumbers(["112",
"0",
"/"])

