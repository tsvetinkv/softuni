function oddOccurences(input) {
  let obj = {};
  let words = input.split(" ");
  for (let el of words) {
    el = el.toLowerCase();
    if (!obj[el]) {
      obj[el] = 0;
    }
 let oldCnt = obj[el];
   obj[el] =  oldCnt + 1;
  }

let entriesFilter = Object.entries(obj).filter(([key, value]) =>{
 return value % 2 !== 0
});
let buff = "";
for (const [k, v] of entriesFilter){
buff += k + " ";
} 
console.log(buff);
}
oddOccurences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
