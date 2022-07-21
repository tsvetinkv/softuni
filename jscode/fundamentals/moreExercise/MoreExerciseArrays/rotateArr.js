function rotateArr(arr){
let n = arr.pop();
for (let i = 1; i <= n; i++) {
    let elToRotate = arr.pop();
    arr.unshift(elToRotate);
}
console.log(arr.join(' '));
}
rotateArr(['1', '2', '3', '4', '2'])