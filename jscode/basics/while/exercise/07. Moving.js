function moving(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let index = 3;
    let appSize = width * length * height;
    let comment = Number(input[index]);
    while(comment !== 'Done'){
        let boxes = Number(comment);
        appSize -= boxes
        if (appSize < 0) {
            let diff = Math.abs(appSize);
            console.log(`No more free space! You need ${diff} Cubic meters more.`);
            break;
        }
         index++;
         comment = input[index];
    }
    if (comment === 'Done'){
        console.log(`${appSize} Cubic meters left.`);
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

