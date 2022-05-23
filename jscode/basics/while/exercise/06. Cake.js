function cake(input){
    let index = 0;
    let width = Number(input[index]);
    index++;
    let lenth = Number(input[index]);
    index++;
    let cake = width * lenth;
    let command = input[index];
    while (command !== "STOP") {
        let piecesGet = Number(command)
         cake -= piecesGet;
        
      if (cake < 0) {
          let diff = Math.abs(cake);
          console.log(`No more cake left! You need ${diff} pieces more.`);
          break;
      }
       index++;
       command = input[index];
    }
    if (command === "STOP") {
    console.log(`${cake} pieces are left.`);
        
    }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

















