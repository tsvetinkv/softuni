function printDNA(n) {
    let str = "ATCGTTAGGG";

    let counter = 0;
  
    for (let i = 0; i < n; i++) {
  
      if (i % 4 == 0) {
  
        console.log(`**${str[counter % 10]}${str[(counter % 10) + 1]}**`);
  
      } else if (i % 4 == 1) {
  
        console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
  
      } else if (i % 4 == 2) {
  
        console.log(`${str[counter % 10]}----${str[(counter % 10) + 1]}`);
  
      } else if (i % 4 == 3) {
  
        console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
  
      }
  
      counter += 2;
  
    }
}
printDNA(10);
//**AT** *C--G* T----T *A--G* **GG** *A--T* C----G *T--T* **AG** *G--G*
