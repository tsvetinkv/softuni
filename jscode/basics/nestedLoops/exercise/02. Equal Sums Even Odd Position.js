function oddEvenSum(input){
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let res = '';
   for(let i = startNumber; i <= endNumber; i++){
       let current = " " + i;
        let oddSum = 0;
    let evenSum = 0;
       for(let j = 0; j <= current.length; j++){
           let currDigit = Number(current.charAt(j));
           if(j % 2 === 0){
            evenSum += currDigit;
        }else{
            oddSum += currDigit; 
       }
       
        }
       
        if(evenSum === oddSum){
            res += `${i} `
        }
   }
     console.log(res);
}
oddEvenSum(["100000",
"100050"])
// 1 odd  0 even  0 odd  0 even  0 odd  0 even
//1 odd  0 even  0 odd  0 even  5 odd  0 even
// even - четно
// odd - нечетно