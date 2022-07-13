function wordCount(input){
let words = input.split(" ");
let count = 0;
for (const word of words) {
    count++;
}
console.log(count);
}wordCount("Representative part or a single item for a large whole or group")