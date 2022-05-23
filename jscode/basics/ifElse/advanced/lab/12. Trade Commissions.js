function tradeCommissions(input){
    const town = input[0]
    const sales = Number(input[1])
if(sales >= 0 && sales <= 500){
    if(town === "Sofia"){
        comission = 0.05 * sales;
        console.log(comission.toFixed(2))
    }else if(town === "Varna"){
        comission = 0.045 * sales
        console.log(comission.toFixed(2))
    }else if(town === "Plovdiv"){
        comission = 0.055 * sales
        console.log(comission.toFixed(2))
    } else{
        console.log("error")
    }
}else if(sales > 500 && sales <= 1000){
    if(town === "Sofia"){
        comission = 0.07 * sales;
        console.log(comission.toFixed(2))
    }else if(town === "Varna"){
        comission = 0.075 * sales
        console.log(comission.toFixed(2))
    }else if(town === "Plovdiv"){
        comission = 0.08 * sales
        console.log(comission.toFixed(2))
    } else{
        console.log("error")
    }
}else if(sales > 1000 && sales <= 10000){
    if(town === "Sofia"){
        comission = 0.08 * sales;
        console.log(comission.toFixed(2))
    }else if(town === "Varna"){
        comission = 0.1 * sales
        console.log(comission.toFixed(2))
    }else if(town === "Plovdiv"){
        comission = 0.12 * sales
        console.log(comission.toFixed(2))
    } else{
        console.log("error")
    }
}else if(sales > 10000){
    if(town === "Sofia"){
        comission = 0.12 * sales;
        console.log(comission.toFixed(2))
    }else if(town === "Varna"){
        comission = 0.13 * sales
        console.log(comission.toFixed(2))
    }else if(town === "Plovdiv"){
        comission = 0.145 * sales
        console.log(comission.toFixed(2))
    } else{
        console.log("error")
    }
}else{
    console.log("error") 
}
}tradeCommissions(["Kaspichan",
"-50"])