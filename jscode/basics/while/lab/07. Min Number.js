function minNumber(input){
    let index = 0;
    let inputElement = input[index];
    index++;
    let min = Number.MAX_SAFE_INTEGER
    while(inputElement !== "Stop"){
    let num = Number(inputElement);
    if(num < min){
        min = num;
    }
    inputElement = input[index];
    index++;
    }
    console.log(min);
    }minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])
    