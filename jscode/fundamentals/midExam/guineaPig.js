function guineaPig(array) {
  let food = Number(array.shift());
  let hay = Number(array.shift());
  let cover = Number(array.shift());
  let weight = Number(array.shift());
  let foodForDay = 0.3;
  for (let i = 1; i <= 30; i++) {
    food -= foodForDay;
    if (i % 2 === 0) {
      hay -= 0.05 * food;
    }
    if (i % 3 === 0){
       cover -= (1 / 3) * weight; 
    } 
  }
  if (food > 0 && hay > 0 && cover > 0) {
    console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
  } else {
    console.log("Merry must go to the pet store!");
  }
}
guineaPig(["10", 
"5", 
"5.2", 
"1"])
;
