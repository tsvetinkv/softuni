function pointsValidation(arr) {
    let x1 = arr[0];
    let x2 = arr[2];
    let y1 = arr[1];
    let y2 = arr[3];
  let distanceOne = Math.sqrt(Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2));
  let distanceTwo = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
  let distancethree = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  if (distanceOne == parseInt(distanceOne)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  }else{
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }
  if (distanceTwo == parseInt(distanceTwo)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  }else{
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }
  if (distancethree == parseInt(distancethree)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  }else{
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

pointsValidation([3, 0, 0, 4]);

