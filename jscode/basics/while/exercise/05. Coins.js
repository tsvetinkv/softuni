function coins(input){
    let sumInLv = Number(input[0]);
    let coinsToHunder = parseInt(sumInLv * 100)
    let coinsCount = 0;
    while (coinsToHunder > 0) {
         if (coinsToHunder - 200 >= 0) {
      coinsCount++
      coinsToHunder -= 200;
    }else if (coinsToHunder - 100 >= 0) {
        coinsCount++
        coinsToHunder -= 100;
    }else if (coinsToHunder - 50 >= 0) {
        coinsCount++
        coinsToHunder -= 50;
    }else if (coinsToHunder - 20 >= 0) {
        coinsCount++
        coinsToHunder -= 20;
    }else if (coinsToHunder - 10 >= 0) {
        coinsCount++
         coinsToHunder -= 10;
    }else if (coinsToHunder - 5 >= 0) {
        coinsCount++
        coinsToHunder -= 5;
    }else if (coinsToHunder - 2 >= 0) {
        coinsCount++
        coinsToHunder -= 2;
    }else if (coinsToHunder - 1 >= 0) {
        coinsCount++
        coinsToHunder -= 1;
    }
    }
   
    console.log(coinsCount);
}coins(["1.23"])