function school(index) {
let pens = Number(index[0])
let markers = Number(index[1])
let board = Number(index[2])
let p = Number(index[3])
const lvpens = pens * 5.80
const lvmarkers = markers * 7.20
const lvpreparat = board * 1.20
let sum = lvpens + lvmarkers + lvpreparat
const nam = p / 100 
let namalenie = sum - (sum * nam)
console.log(namalenie)
}
school(["2 ",
"3 ",
"4 ",
"25 "]
)