function painting(index) {
    const nailonprice = 1.5
    const boqprice = 14.5
    const razreditelprice = 5
    const boqp = 0.1
    const bag = 0.40

const nailon = Number(index[0])
const boq = Number(index[1])
const razreditel = Number(index[2])
const hours = Number(index[3])

const sumnailon = (nailon + 2) * nailonprice
const sumboq = (boq + (boq * boqp)) * boqprice
const sumrazreditel = razreditel * razreditelprice
const summaterials = sumnailon + sumboq + sumrazreditel + bag
const summajstor = (summaterials * 0.3 ) * hours
const sum = summajstor + summaterials
console.log(sum)
}
painting(["5 ","10 ","10 ","1 "])