function building(input){
let floor = Number(input[0]);
let rooms = Number(input[1]);

for(let f = floor ; f > 0; f--){
     let result = ''
    for(let r = 0 ; r < rooms ; r++){
       
        if (floor === f) {
             result += `L${f}${r} `
        }else if (f % 2 === 0) {
            result += `O${f}${r} `
        }else{
            result += `A${f}${r} `
        }
       
        
    }
    console.log(result);
}
 
} building(["6", "4"])
// L60 L61 L62 L63
// A50 A51 A52 A53
// O40 O41 O42 O43
// A30 A31 A32 A33
// O20 O21 O22 O23
// A10 A11 A12 A13


// Напишете функция, която извежда на конзолата номерата на стаите в една 
// сграда (в низходящ ред), като са изпълнени следните условия:
// •	На всеки четен етаж има само офиси
// •	На всеки нечетен етаж има само апартаменти
// •	Всеки апартамент се означава по следния начин : A{номер на етажа}
// {номер на апартамента}, номерата на апартаментите започват от 0.
// •	Всеки офис се означава по следния начин : O{номер на етажа}{номер на офиса},
//  номерата на офисите също започват от 0.
// •	На последният етаж винаги има апартаменти и те са по-големи от останалите, 
// за това пред номера им пише 'L', вместо 'A'. Ако има само един етаж, то има само големи апартаменти!
// Функцията получава масив от две цели числа - броят на етажите и броят на стаите за един етаж. 
