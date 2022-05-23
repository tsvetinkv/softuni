function summerOutfit(input){
    const temperature = Number(input[0])
    const timeOfTheDay = input[1]
    let outfit 
    let shoes 
    if(temperature >= 10 && temperature <=18){
        switch(timeOfTheDay){
            case "Morning": outfit = "Sweatshirt";  shoes = "Sneakers"; break;
            case "Afternoon": outfit = "Shirt"; shoes = "Moccasins"; break;
            case "Evening": outfit = "Shirt";  shoes = "Moccasins"
           
        }
    }else if(temperature > 18 && temperature <= 24){
        switch(timeOfTheDay){
            case "Morning": outfit = "Shirt";  shoes = "Moccasins"; break;
            case "Afternoon": outfit = "T-Shirt"; shoes = "Sandals"; break;
            case "Evening": outfit = "Shirt";  shoes = "Moccasins"
           
        }
    }else{
        switch(timeOfTheDay){
            case "Morning": outfit = "T-Shirt";  shoes = "Sandals"; break;
            case "Afternoon": outfit = "Swim Suit"; shoes = "Barefoot"; break;
            case "Evening": outfit = "Shirt";  shoes = "Moccasins"
           
        }
    }
console.log(`It's ${temperature} degrees, get your ${outfit} and ${shoes}.`)
}summerOutfit
(["16",
"Morning"])

