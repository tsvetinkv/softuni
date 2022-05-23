function convert(index) {
    const rd = Number(index[0])
    const gr = (rd * 180) / Math.PI 
    console.log(gr)
}
convert(["3.1416"])