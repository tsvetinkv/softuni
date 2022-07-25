function carWash(arr){
let procentsClean = 0;
for (const el of arr) {
    switch (el){
        case 'soap':
        procentsClean += 10;
        break;
        case 'water':
            procentsClean += (0.2 * procentsClean);
        break;
        case 'vacuum cleaner':
            procentsClean += (0.25 * procentsClean);
        break;
        case 'mud':
            procentsClean -= (0.1 * procentsClean);
        break;
    }
}
console.log(`The car is ${procentsClean.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap','water']);
//soap – add 10 to the value
// · water – increase the value by 20%
// · vacuum cleaner – increase the value by 25%
// · mud – decrease the value by 10%