function personalTitles(input){
    const gender = input[1]
    const age = Number(input[0])
    if(age >= 16){
        if(gender === 'm'){
            console.log("Mr.")
        }else{
            console.log("Ms.")
        }
    } else {
        if(gender === 'm'){
            console.log("Master")
        }else{
            console.log("Miss")
        }
    }
} personalTitles(["16",
"m"])
