function sortNumbers(num1 ,num2, num3) {
    let arr = [];
    arr.push(num1);
    arr.push(num2);
    arr.push(num3);
    let sorted = arr.sort((a,b) => b - a)
    console.log(sorted.join('\n'));
}
sortNumbers(-2, 1, 3)