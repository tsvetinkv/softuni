function trianglesOfNums(num){
    
for (let row = 1; row <= num; row++) {
    let result = '';
   for (let col = 1; col <= row; col++) {
       result += `${row} `
       
   }
   console.log(result);
}

}trianglesOfNums(3)