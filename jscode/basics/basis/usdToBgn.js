function usdToBgn(index) {
let usd =  Number(index[0])
let bgn = usd * 1.79549 
console.log(bgn.toFixed(2))
}
usdToBgn(["22"])