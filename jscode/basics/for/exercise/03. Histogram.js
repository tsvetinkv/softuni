function histogram(input){
    let n = Number(input[0])
    let p1 = 0
    let p2 = 0
    let p3 = 0
    let p4 = 0
    let p5 = 0
  
    for (let i = 1; i <= n; i++){
        let num = Number(input[i])
        if(num < 200){
            p1++
        }else if(num >= 200 && num <= 399){
            p2++
        }else if(num >= 400 && num <= 599){
            p3++
        }else if(num >= 600 && num <= 799){
            p4++
        }else{
        p5++
        }
    }
     let   p1P = p1 / n * 100
 let    p2P = p2 / n * 100
  let   p3P = p3 / n * 100
  let   p4P = p4 / n * 100
 let   p5P = p5/ n * 100
console.log(`${p1P.toFixed(2)}%`);
console.log(`${p2P.toFixed(2)}%`);
console.log(`${p3P.toFixed(2)}%`);
console.log(`${p4P.toFixed(2)}%`);
console.log(`${p5P.toFixed(2)}%`);
}histogram([14,
    53,
    7,
    56,
    180,
    450,
    920,
    12,
    7,
    150,
    250,
    680,
    2,
    600,
    200])
    // 57.14%
    // 14.29%
    // 7.14%
    // 14.29%
    // 7.14%
    