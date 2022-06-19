function negativeOrPositiveNumbers(arr){
    let result = [];
for (let el of arr) {
    if (el < 0) {
        result.push(el);
    }else{
        result.unshift(el);
    }
}
console.log(result.reverse().join('\n'));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])