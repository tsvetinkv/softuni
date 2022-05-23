function literature(index) {
let pages = Number(index[0])
let hourPages = Number(index[1])
let days = Number(index[2])
let book = pages / hourPages
let hours = book / days
console.log(hours)
}
literature(["212 ","20 ","2 "])