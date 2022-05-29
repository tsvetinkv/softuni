function conus(r, h){
    let volume = (Math.PI * r * r * h) / 3
    let l = h + r
    let area = Math.PI * r *(r + Math.sqrt(r * r + h * h))

    console.log(l);
console.log(`volume = ${volume.toFixed(4)}`);
console.log(`area = ${area.toFixed(4)}`);
}conus(3, 5)