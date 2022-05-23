function animalType(input){
    const animal = input[0]
//     1.	dog -> mammal
// 2.	crocodile, tortoise, snake -> reptile
// 3.	others -> unknown
switch(animal){
    case "dog": console.log("mammal"); break;
    case "crocodile": 
    case "snake":
        case "tortoise":console.log("reptile"); break;
default: console.log("unknown")
    
}
} animalType(["cat"])