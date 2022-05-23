function area(input){
let a = Number(input[1])
let type = input[0]
// •	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
// •	Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
// •	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
// •	Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея

if(type === "square" ){
    console.log((a*a).toFixed(3))
} else if(type === "rectangle"){
    let b = Number(input[2])
console.log((a * b).toFixed(3))
}else if(type ==="circle"){
console.log((Math.PI * Math.pow(a, 2)).toFixed(3))
}else{
    let b = Number(input[2])
    result = a * b 
    console.log((result/2).toFixed(3))
}
}
area(["triangle",
"4.5",
"20"])



