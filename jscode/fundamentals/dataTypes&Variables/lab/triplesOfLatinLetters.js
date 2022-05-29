function triplesOfLatinLetters(n){
    for (let index = 0; index < n; index++) {
         let letter1 = String.fromCharCode(97 + index);
        for (let j = 0; j < n; j++) {
           let  letter2 = String.fromCharCode(97 + j)
            for (let k = 0; k < n; k++) {
             let letter3 = String.fromCharCode(97 + k)
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
        
    }
}triplesOfLatinLetters(3);