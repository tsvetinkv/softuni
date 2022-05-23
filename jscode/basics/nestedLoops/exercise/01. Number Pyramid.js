function pyramid(input){
    let num = Number(input[0])
    let isEqual = false
    let counter = 0;
    for (let rows = 1; rows <= num; rows++){
        let res = ''
        for (let cols = 1; cols <= rows; cols++){
            counter++;
          res += counter + " "
          if (counter === num) {
              isEqual = true
               break
            }
        }
        console.log(res);
if (isEqual) {
    break;
        }
    }
}
pyramid(["7"])
// 1
// 2 3
// 4 5 6 
// 7
