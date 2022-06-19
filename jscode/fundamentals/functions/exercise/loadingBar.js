function loadingBar(num) {
  let loaded = '%'.repeat(num / 10);
  let loading = '.'.repeat(10 - (num / 10));
 if (num < 100) {
   console.log(`${num}% [${loaded}${loading}]`);
   console.log("Still loading..."); 
 }else{
    console.log(`${num}% Complete!`);
    console.log(`[${loaded}]`);
 }
}loadingBar(100)
