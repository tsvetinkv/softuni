function green(index){
    let area = index[0]
    let greeing = area * 7.61
    let discount = 0.18 * greeing
    let total =  greeing - discount
    console.log(`The final price is: ${total} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
green(["550"])