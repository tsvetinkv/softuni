function fishTank(input){
    // заето пространство: 17% = 0.17
const bisi = 0.17
    // 1.	Дължина в см – цяло число в интервала [10 … 500]
const  lenght = Number(input[0])
    // 2.	Широчина в см – цяло число в интервала [10 … 300]
const width = Number(input[1])
    // 3.	Височина в см – цяло число в интервала [10… 200]
    const height = Number(input[2])
    // 4.	Процент  – реално число в интервала [0.000 … 100.000]
    const procent = Number(input[3])

//     обем на аквариумa: 85 * 75 * 47 = 299625 см3
const volumeaq = lenght * width * height 
// обем в литри: 299625 * 0.001 или  299625 / 1000 => 299.625 литра
const volumel = volumeaq * 0.001
// нужни литри: 299.625 * (1 - 0.17) = 248.68875 литра
const  liters =  volumel * (1 - procent/100)
console.log(liters)
}
fishTank(["85 ","75 ","47 ","17 "])