function depozit (index){
    let depozit = Number(index[0])
    let time =  Number(index[1])
    let p =  Number(index[2])
    let lihva = depozit * (p / 100)
    let monthp =  lihva / 12
    let end = depozit + time * monthp
    console.log(end) 
}
depozit(["2350","6 ","7 "])